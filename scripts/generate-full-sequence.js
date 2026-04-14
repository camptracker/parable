#!/usr/bin/env node

/**
 * Generate 10 sequential scenes from THE KEEPERS screenplay
 * and chain them into a complete video with sound
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config
const PROJECT_ID = 'character-ai';
const LOCATION = 'us-central1';
const MODEL_ID = 'veo-2.0-generate-001';
const BASE_URL = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/${MODEL_ID}`;

// Load credentials
const credentialsPath = path.join(__dirname, '../credentials.json');
const GOOGLE_CREDENTIALS = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));

// Parse screenplay to get coherent scene sequence
function parseScreenplay() {
  const screenplayPath = path.join(__dirname, '../screenplay/THE_KEEPERS_EPIC.fountain');
  const screenplay = fs.readFileSync(screenplayPath, 'utf-8');
  
  const lines = screenplay.split('\n');
  const scenes = [];
  let currentScene = null;
  let sceneCounter = 0;

  for (const line of lines) {
    if (line.match(/^(INT\.|EXT\.)/)) {
      if (currentScene && currentScene.description.length > 0) {
        scenes.push(currentScene);
      }
      sceneCounter++;
      currentScene = {
        number: sceneCounter,
        header: line.trim(),
        description: []
      };
    } else if (currentScene && line.trim() && !line.match(/^\s{20,}/) && !line.match(/^[A-Z\s]+$/)) {
      currentScene.description.push(line.trim());
    }
  }

  if (currentScene && currentScene.description.length > 0) {
    scenes.push(currentScene);
  }

  return scenes;
}

// Generate cinematic prompt for each scene
function sceneToPrompt(scene, sceneNumber, totalScenes) {
  const setting = scene.header.replace(/^(INT\.|EXT\.)\s+/, '').split(' - ')[0];
  const description = scene.description.slice(0, 3).join(' ');
  
  // Add narrative continuity cues
  let continuity = '';
  if (sceneNumber === 1) {
    continuity = 'Opening shot. ';
  } else if (sceneNumber === totalScenes) {
    continuity = 'Final shot of sequence. ';
  } else {
    continuity = `Scene ${sceneNumber} of ${totalScenes}. `;
  }
  
  return `${continuity}Cinematic shot: ${setting}. ${description}. Professional cinematography, dramatic lighting, film grain, 24fps aesthetic, ambient sound design, high quality production.`;
}

async function getAccessToken() {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: GOOGLE_CREDENTIALS.client_id,
      client_secret: GOOGLE_CREDENTIALS.client_secret,
      refresh_token: GOOGLE_CREDENTIALS.refresh_token,
      grant_type: 'refresh_token'
    })
  });

  const data = await response.json();
  return data.access_token;
}

async function generateVideo(prompt, accessToken) {
  const requestBody = {
    instances: [{ prompt }],
    parameters: {
      aspectRatio: '16:9',
      sampleCount: 1
    }
  };

  const response = await fetch(`${BASE_URL}:predictLongRunning`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${data.error?.message}`);
  }

  return data.name;
}

async function pollOperation(operationName, accessToken) {
  const pollUrl = `${BASE_URL}:fetchPredictOperation`;

  for (let attempt = 0; attempt < 60; attempt++) {
    await new Promise(r => setTimeout(r, 10000));

    const response = await fetch(pollUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ operationName })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Poll error ${response.status}`);
    }

    if (data.done) {
      return data;
    }
  }

  throw new Error('Timeout waiting for video');
}

async function downloadVideo(operationResult, outputPath) {
  const resp = operationResult.response;
  const video = (resp.videos || resp.predictions || [])[0];
  
  if (!video) {
    throw new Error('No video in response');
  }

  if (video.bytesBase64Encoded) {
    const videoBuffer = Buffer.from(video.bytesBase64Encoded, 'base64');
    fs.writeFileSync(outputPath, videoBuffer);
    return outputPath;
  } else if (video.gcsUri) {
    // Download from GCS
    await execAsync(`gsutil cp "${video.gcsUri}" "${outputPath}"`);
    return outputPath;
  }

  throw new Error('Unknown video format');
}

async function chainVideos(videoPaths, outputPath) {
  console.log('\n🎬 Chaining videos together...\n');
  
  // Create concat file for ffmpeg
  const concatFile = path.join(__dirname, '..', 'concat-list.txt');
  const concatContent = videoPaths.map(p => `file '${p}'`).join('\n');
  fs.writeFileSync(concatFile, concatContent);
  
  // Chain with ffmpeg (preserves audio)
  const cmd = `ffmpeg -f concat -safe 0 -i "${concatFile}" -c copy "${outputPath}" -y`;
  
  console.log('Running ffmpeg...');
  await execAsync(cmd);
  
  // Clean up
  fs.unlinkSync(concatFile);
  
  const stats = fs.statSync(outputPath);
  console.log(`✅ Final video saved to: ${outputPath}`);
  console.log(`   File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB\n`);
}

async function main() {
  try {
    console.log('🎬 THE KEEPERS - Full Sequence Generator\n');
    console.log('Generating 10 coherent scenes with sound...\n');

    // Parse screenplay
    const allScenes = parseScreenplay();
    const scenesToGenerate = allScenes.slice(0, 10);
    
    console.log(`Found ${allScenes.length} total scenes`);
    console.log(`Generating first ${scenesToGenerate.length} scenes\n`);

    // Authenticate
    const accessToken = await getAccessToken();
    console.log('✅ Authenticated\n');

    // Generate each video
    const videoDir = path.join(__dirname, '..', 'public', 'videos');
    if (!fs.existsSync(videoDir)) {
      fs.mkdirSync(videoDir, { recursive: true });
    }

    const videoPaths = [];

    for (let i = 0; i < scenesToGenerate.length; i++) {
      const scene = scenesToGenerate[i];
      const sceneNum = i + 1;
      
      console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
      console.log(`Scene ${sceneNum}/10: ${scene.header}`);
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

      const prompt = sceneToPrompt(scene, sceneNum, scenesToGenerate.length);
      console.log(`Prompt: "${prompt.substring(0, 100)}..."\n`);

      // Generate
      console.log('Submitting to Veo 2.0...');
      const operationName = await generateVideo(prompt, accessToken);
      console.log(`Operation: ${operationName.split('/').pop()}\n`);

      // Poll for completion
      process.stdout.write('Generating');
      const result = await pollOperation(operationName, accessToken);
      console.log(' ✅ Complete!\n');

      // Download
      const outputPath = path.join(videoDir, `scene-${sceneNum}.mp4`);
      await downloadVideo(result, outputPath);
      videoPaths.push(outputPath);
      
      const stats = fs.statSync(outputPath);
      console.log(`📹 Saved: ${outputPath}`);
      console.log(`   Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

      // Brief pause between requests
      if (i < scenesToGenerate.length - 1) {
        console.log('\n⏸️  Waiting 5 seconds before next scene...');
        await new Promise(r => setTimeout(r, 5000));
      }
    }

    // Chain all videos together
    const finalVideo = path.join(videoDir, 'full-sequence.mp4');
    await chainVideos(videoPaths, finalVideo);

    console.log('\n✅ ALL DONE!\n');
    console.log('Individual scenes:');
    videoPaths.forEach((p, i) => console.log(`  ${i + 1}. ${p}`));
    console.log(`\nFull sequence: ${finalVideo}\n`);
    console.log('📺 Next steps:');
    console.log('   1. Deploy: npm run deploy');
    console.log('   2. View: https://camptracker.github.io/parable/#/screenplay\n');

  } catch (err) {
    console.error('\n❌ Error:', err.message);
    if (err.stack) {
      console.error(err.stack);
    }
    process.exit(1);
  }
}

main();

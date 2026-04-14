#!/usr/bin/env node

/**
 * Generate video from THE KEEPERS screenplay using Google Veo API
 * 
 * Usage: node generate-veo-video.js [--scene N]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Google OAuth credentials from credentials.json
const credentialsPath = path.join(__dirname, '../credentials.json');
const GOOGLE_CREDENTIALS = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
const PROJECT_ID = GOOGLE_CREDENTIALS.project_id || "parable-489408";
const LOCATION = "us-central1";
const VEO_MODEL = "veo-001";

/**
 * Get access token from refresh token
 */
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
  if (!data.access_token) {
    throw new Error('Failed to get access token: ' + JSON.stringify(data));
  }

  return data.access_token;
}

/**
 * Parse screenplay into scenes
 */
function parseScreenplay() {
  const screenplayPath = path.join(__dirname, '../screenplay/THE_KEEPERS_EPIC.fountain');
  const screenplay = fs.readFileSync(screenplayPath, 'utf-8');

  // Parse Fountain format - extract scene headers and descriptions
  const lines = screenplay.split('\n');
  const scenes = [];
  let currentScene = null;
  let sceneCounter = 0;

  for (const line of lines) {
    // Scene headers start with INT. or EXT.
    if (line.match(/^(INT\.|EXT\.)/)) {
      if (currentScene) {
        scenes.push(currentScene);
      }
      sceneCounter++;
      currentScene = {
        number: sceneCounter,
        header: line.trim(),
        description: [],
        dialogue: []
      };
    } else if (currentScene) {
      // Action/description lines (not dialogue)
      if (line.trim() && !line.match(/^\s{20,}/) && !line.match(/^\s+[A-Z\s]+$/)) {
        currentScene.description.push(line.trim());
      }
      // Character dialogue (indented)
      else if (line.match(/^\s{2,}/)) {
        currentScene.dialogue.push(line.trim());
      }
    }
  }

  if (currentScene) {
    scenes.push(currentScene);
  }

  return scenes;
}

/**
 * Generate video prompt from scene
 */
function sceneToPrompt(scene) {
  const setting = scene.header.replace(/^(INT\.|EXT\.)\s+/, '').split(' - ')[0];
  const description = scene.description.slice(0, 3).join(' '); // First 3 description lines
  
  // Create cinematic prompt for Veo
  return `Cinematic establishing shot: ${setting}. ${description}. Professional cinematography, dramatic lighting, film grain, 24fps aesthetic. High quality video production.`;
}

/**
 * Generate video using Google Veo API
 */
async function generateVideo(prompt, accessToken, outputPath) {
  console.log(`\nGenerating video for prompt:\n"${prompt}"\n`);

  const endpoint = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/${VEO_MODEL}:predict`;

  const requestBody = {
    instances: [{
      prompt: prompt,
      negativePrompt: "low quality, blurry, distorted, amateur",
    }],
    parameters: {
      sampleCount: 1,
      aspectRatio: "16:9",
      durationSeconds: 8,
      enableSound: true
    }
  };

  console.log('Calling Veo API...');
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  const result = await response.json();

  if (!response.ok) {
    console.error('API Error:', JSON.stringify(result, null, 2));
    throw new Error(`Veo API failed: ${result.error?.message || 'Unknown error'}`);
  }

  console.log('API Response:', JSON.stringify(result, null, 2));

  // Extract video data
  if (result.predictions && result.predictions[0]) {
    const videoData = result.predictions[0];
    
    // Video might be returned as base64 or GCS URL
    if (videoData.bytesBase64Encoded) {
      const buffer = Buffer.from(videoData.bytesBase64Encoded, 'base64');
      fs.writeFileSync(outputPath, buffer);
      console.log(`✓ Video saved to: ${outputPath}`);
    } else if (videoData.gcsUri) {
      console.log(`✓ Video available at GCS: ${videoData.gcsUri}`);
      // TODO: Download from GCS if needed
      return { gcsUri: videoData.gcsUri };
    } else {
      console.log('Unexpected response format:', videoData);
    }
  }

  return result;
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🎬 THE KEEPERS - Veo Video Generator\n');

    // Parse command line args
    const args = process.argv.slice(2);
    const sceneIndex = args.includes('--scene') 
      ? parseInt(args[args.indexOf('--scene') + 1]) - 1
      : 0;

    // Get access token
    console.log('Authenticating with Google...');
    const accessToken = await getAccessToken();
    console.log('✓ Authenticated\n');

    // Parse screenplay
    console.log('Parsing screenplay...');
    const scenes = parseScreenplay();
    console.log(`✓ Found ${scenes.length} scenes\n`);

    // Select scene to generate
    const scene = scenes[sceneIndex];
    if (!scene) {
      console.error(`Error: Scene ${sceneIndex + 1} not found. Available: 1-${scenes.length}`);
      process.exit(1);
    }

    console.log(`Selected Scene ${scene.number}:`);
    console.log(`  ${scene.header}`);
    console.log(`  Description: ${scene.description.slice(0, 2).join(' ')}...\n`);

    // Generate prompt
    const prompt = sceneToPrompt(scene);

    // Create output directory
    const outputDir = path.join(__dirname, '../public/videos');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, `scene-${scene.number}.mp4`);

    // Generate video
    const result = await generateVideo(prompt, accessToken, outputPath);

    console.log('\n✅ Video generation complete!\n');
    
    // Save metadata
    const metadataPath = path.join(outputDir, `scene-${scene.number}.json`);
    fs.writeFileSync(metadataPath, JSON.stringify({
      sceneNumber: scene.number,
      sceneHeader: scene.header,
      prompt: prompt,
      generatedAt: new Date().toISOString(),
      result: result
    }, null, 2));

    console.log(`Metadata saved to: ${metadataPath}`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateVideo, parseScreenplay, sceneToPrompt };

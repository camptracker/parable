#!/usr/bin/env node

/**
 * Complete Veo 2.0 video generation with working polling
 * Based on official template
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config
const PROJECT_ID = 'character-ai';
const LOCATION = 'us-central1';
const MODEL_ID = 'veo-2.0-generate-001';
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'videos', 'scene-1.mp4');
const BASE_URL = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/${MODEL_ID}`;

// Load credentials
const credentialsPath = path.join(__dirname, '../credentials.json');
const GOOGLE_CREDENTIALS = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));

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

async function generateVideo(accessToken) {
  console.log('🎬 Submitting video generation request...\n');

  // Screenplay prompt for THE KEEPERS opening scene
  const prompt = `Cinematic establishing shot: Ancient temple archives beneath Jerusalem. 
A young scholar descends stone steps carrying an oil lamp. 
Walls covered in ancient Hebrew carvings that shimmer with digital code. 
Dramatic lighting, mysterious atmosphere, film noir aesthetic. 
Professional cinematography, 24fps, high quality.`;

  const requestBody = {
    instances: [{
      prompt: prompt
    }],
    parameters: {
      aspectRatio: '16:9',
      sampleCount: 1
    }
  };

  console.log('Prompt:');
  console.log(`"${prompt}"\n`);

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
    console.error('Error response:', JSON.stringify(data, null, 2));
    throw new Error(`API error ${response.status}: ${data.error?.message || JSON.stringify(data)}`);
  }

  console.log('✅ Operation started:', data.name);
  console.log('');
  return data.name;
}

async function pollOperation(operationName, accessToken) {
  const pollUrl = `${BASE_URL}:fetchPredictOperation`;
  
  console.log('⏳ Polling for completion...\n');

  for (let attempt = 0; attempt < 60; attempt++) {
    await new Promise((r) => setTimeout(r, 10000)); // wait 10s between polls

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
      console.error('Poll error:', JSON.stringify(data, null, 2));
      throw new Error(`Poll error ${response.status}`);
    }

    const elapsed = ((attempt + 1) * 10);
    process.stdout.write(`\r[${elapsed}s] Status: ${data.done ? 'done' : 'in progress'}...`);

    if (data.done) {
      console.log('\n\n✅ Operation complete!\n');
      return data;
    }
  }

  throw new Error('Timed out waiting for video generation');
}

async function downloadVideo(operationResult) {
  const resp = operationResult.response;
  
  if (!resp) {
    console.error('Full result:', JSON.stringify(operationResult, null, 2));
    throw new Error('No response in operation result');
  }

  // Veo returns response.videos[] or response.predictions[]
  const video = (resp.videos || resp.predictions || [])[0];
  
  if (!video) {
    console.error('Full response:', JSON.stringify(resp, null, 2));
    throw new Error('No video in response');
  }

  // Create output directory
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  if (video.bytesBase64Encoded) {
    const videoBuffer = Buffer.from(video.bytesBase64Encoded, 'base64');
    fs.writeFileSync(OUTPUT_FILE, videoBuffer);
    console.log(`📹 Video saved to: ${OUTPUT_FILE}`);
    console.log(`   File size: ${(videoBuffer.length / 1024 / 1024).toFixed(2)} MB\n`);
    return OUTPUT_FILE;
  } else if (video.gcsUri) {
    console.log(`📦 Video is at GCS URI: ${video.gcsUri}`);
    console.log(`\nTo download manually, run:`);
    console.log(`   gsutil cp "${video.gcsUri}" "${OUTPUT_FILE}"\n`);
    
    // Save GCS URI to file for reference
    const uriFile = OUTPUT_FILE.replace('.mp4', '.gcs-uri.txt');
    fs.writeFileSync(uriFile, video.gcsUri);
    console.log(`GCS URI saved to: ${uriFile}\n`);
    return video.gcsUri;
  } else {
    console.log('Unexpected video format:', JSON.stringify(video, null, 2));
    throw new Error('Unknown video format in response');
  }
}

async function main() {
  try {
    console.log('🎬 THE KEEPERS - Veo 2.0 Video Generator\n');
    console.log(`Project: ${PROJECT_ID}`);
    console.log(`Location: ${LOCATION}`);
    console.log(`Model: ${MODEL_ID}\n`);

    const accessToken = await getAccessToken();
    console.log('✅ Authenticated successfully.\n');

    const operationName = await generateVideo(accessToken);
    const result = await pollOperation(operationName, accessToken);
    const videoPath = await downloadVideo(result);

    console.log('✅ Done! Your video is ready.');
    console.log('\n📺 Next steps:');
    console.log('   1. Deploy to website: npm run deploy');
    console.log('   2. View at: https://camptracker.github.io/parable/#/screenplay\n');

  } catch (err) {
    console.error('\n❌ Failed:', err.message);
    if (err.stack) {
      console.error(err.stack);
    }
    process.exit(1);
  }
}

main();

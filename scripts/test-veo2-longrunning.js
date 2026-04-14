#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ID = 'character-ai';
const LOCATION = 'us-central1';
const MODEL_ID = 'veo-2.0-generate-001';
const OUTPUT_FILE = 'hello-world.mp4';

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

async function generateVideo() {
  console.log('🎬 Testing Veo 2.0 Video Generation (Long Running)\n');
  console.log(`Project: ${PROJECT_ID}`);
  console.log(`Location: ${LOCATION}`);
  console.log(`Model: ${MODEL_ID}\n`);

  // Get access token
  console.log('Getting access token...');
  const accessToken = await getAccessToken();
  console.log('✓ Got access token\n');

  // Test prompt from THE KEEPERS screenplay
  const prompt = `Cinematic establishing shot: Ancient temple archives beneath Jerusalem. 
A young scholar descends stone steps carrying an oil lamp. 
Walls covered in ancient Hebrew carvings that shimmer with digital code. 
Dramatic lighting, mysterious atmosphere, film noir aesthetic. 
Professional cinematography, 24fps, high quality.`;

  console.log('Prompt:');
  console.log(`"${prompt}"\n`);

  const requestBody = {
    instances: [{
      prompt: prompt
    }],
    parameters: {
      sampleCount: 1,
      aspectRatio: "16:9"
    }
  };

  console.log('Request body:');
  console.log(JSON.stringify(requestBody, null, 2));
  console.log('\nCalling Veo 2.0 LongRunning API...\n');

  // Use predictLongRunning endpoint
  const endpoint = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/${MODEL_ID}:predictLongRunning`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  const result = await response.json();

  console.log('Response status:', response.status);
  console.log('Response:');
  console.log(JSON.stringify(result, null, 2));

  if (!response.ok) {
    throw new Error(`API Error: ${result.error?.message || 'Unknown error'}`);
  }

  // Long-running operation returns an operation name
  if (result.name) {
    console.log(`\n✅ Video generation started!`);
    console.log(`Operation: ${result.name}`);
    console.log(`\nThis is a long-running operation. Poll this operation to check status.`);
    
    // Save operation info
    const opPath = path.join(__dirname, '..', 'operation.json');
    fs.writeFileSync(opPath, JSON.stringify(result, null, 2));
    console.log(`Operation details saved to: ${opPath}`);
    
    return result;
  }

  return result;
}

// Run
generateVideo().catch(error => {
  console.error('\n❌ Error:', error.message);
  if (error.stack) {
    console.error(error.stack);
  }
  process.exit(1);
});

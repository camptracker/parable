#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  return data.access_token;
}

async function pollOperation(operationName) {
  const accessToken = await getAccessToken();
  
  // Use the full operation name as returned by the API
  // The operation name IS the resource path
  const endpoint = `https://us-central1-aiplatform.googleapis.com/v1/${operationName}`;
  
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to poll (${response.status}): ${errorText.substring(0, 500)}`);
  }

  const result = await response.json();
  return result;
}

async function main() {
  // Load operation from file
  const opPath = path.join(__dirname, '..', 'operation.json');
  
  if (!fs.existsSync(opPath)) {
    console.error('No operation.json found. Run test-veo2-longrunning.js first.');
    process.exit(1);
  }

  const operation = JSON.parse(fs.readFileSync(opPath, 'utf-8'));
  const operationName = operation.name;

  console.log('🔄 Polling Veo 2.0 Operation\n');
  console.log(`Operation: ${operationName}\n`);

  let attempts = 0;
  const maxAttempts = 60; // Poll for up to 10 minutes

  while (attempts < maxAttempts) {
    attempts++;
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${attempts}/${maxAttempts}] ${timestamp} - Checking status...`);

    try {
      const result = await pollOperation(operationName);

      if (result.done) {
        console.log('\n✅ Operation complete!\n');

        // Check for errors
        if (result.error) {
          console.error('❌ Generation failed:');
          console.error(JSON.stringify(result.error, null, 2));
          process.exit(1);
        }

        // Extract video
        if (result.response) {
          console.log('Response structure:');
          console.log(JSON.stringify(result.response, null, 2).substring(0, 1000));
          
          // Try multiple possible locations for the video data
          const predictions = result.response.predictions || result.response.outputs || [];
          
          if (predictions.length > 0) {
            const prediction = predictions[0];
            
            if (prediction.bytesBase64Encoded) {
              const outputPath = path.join(__dirname, '..', 'public', 'videos', 'scene-1.mp4');
              const outputDir = path.dirname(outputPath);
              
              if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
              }
              
              const buffer = Buffer.from(prediction.bytesBase64Encoded, 'base64');
              fs.writeFileSync(outputPath, buffer);
              console.log(`\n✅ Video saved to: ${outputPath}`);
              console.log(`   File size: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);
            } else if (prediction.gcsUri || prediction.videoUri) {
              const uri = prediction.gcsUri || prediction.videoUri;
              console.log(`\n✅ Video available at: ${uri}`);
              console.log('\nTo download manually:');
              console.log(`gsutil cp "${uri}" public/videos/scene-1.mp4`);
            } else {
              console.log('\nPrediction data (first 1000 chars):');
              console.log(JSON.stringify(prediction, null, 2).substring(0, 1000));
            }
          }
        }

        // Save full result
        const resultPath = path.join(__dirname, '..', 'result.json');
        fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
        console.log(`\nFull result saved to: ${resultPath}`);

        break;
      } else {
        // Still in progress
        const metadata = result.metadata || {};
        console.log(`   Status: In progress...`);
        if (metadata.progressPercentage !== undefined) {
          console.log(`   Progress: ${metadata.progressPercentage}%`);
        }
        console.log('   Waiting 10 seconds...\n');
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    } catch (error) {
      console.error(`   ❌ Error: ${error.message.substring(0, 200)}`);
      console.log('   Waiting 10 seconds before retry...\n');
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }

  if (attempts >= maxAttempts) {
    console.log('\n⏱️ Polling timeout reached.');
    console.log('Video generation may still be in progress.');
    console.log('Check Google Cloud Console or run this script again.');
  }
}

main().catch(error => {
  console.error('\n❌ Fatal error:', error.message);
  process.exit(1);
});

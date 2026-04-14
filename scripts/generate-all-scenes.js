#!/usr/bin/env node

/**
 * Generate videos for all screenplay scenes
 */

import { parseScreenplay, sceneToPrompt, generateVideo } from './generate-veo-video.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Google OAuth credentials from credentials.json
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

async function main() {
  console.log('🎬 THE KEEPERS - Batch Video Generator\n');

  // Get access token
  console.log('Authenticating...');
  const accessToken = await getAccessToken();
  console.log('✓ Authenticated\n');

  // Parse screenplay
  console.log('Parsing screenplay...');
  const scenes = parseScreenplay();
  console.log(`✓ Found ${scenes.length} scenes\n`);

  // Limit to first 5 scenes for demo (Veo is expensive!)
  const maxScenes = parseInt(process.argv[2]) || 5;
  const scenesToGenerate = scenes.slice(0, maxScenes);

  console.log(`Generating videos for ${scenesToGenerate.length} scenes...\n`);

  const outputDir = path.join(__dirname, '../public/videos');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const results = [];

  for (let i = 0; i < scenesToGenerate.length; i++) {
    const scene = scenesToGenerate[i];
    console.log(`\n[${i + 1}/${scenesToGenerate.length}] Scene ${scene.number}: ${scene.header}`);

    const prompt = sceneToPrompt(scene);
    const outputPath = path.join(outputDir, `scene-${scene.number}.mp4`);

    try {
      const result = await generateVideo(prompt, accessToken, outputPath);
      
      results.push({
        sceneNumber: scene.number,
        sceneHeader: scene.header,
        prompt: prompt,
        videoPath: `videos/scene-${scene.number}.mp4`,
        status: 'success',
        result: result
      });

      console.log(`✓ Scene ${scene.number} complete`);

      // Wait between requests to avoid rate limiting
      if (i < scenesToGenerate.length - 1) {
        console.log('Waiting 5 seconds before next request...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }

    } catch (error) {
      console.error(`✗ Scene ${scene.number} failed:`, error.message);
      results.push({
        sceneNumber: scene.number,
        sceneHeader: scene.header,
        status: 'failed',
        error: error.message
      });
    }
  }

  // Save manifest
  const manifestPath = path.join(outputDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    totalScenes: scenes.length,
    generatedScenes: scenesToGenerate.length,
    scenes: results
  }, null, 2));

  console.log(`\n✅ Batch generation complete!`);
  console.log(`Manifest saved to: ${manifestPath}`);
  console.log(`\nSuccessful: ${results.filter(r => r.status === 'success').length}`);
  console.log(`Failed: ${results.filter(r => r.status === 'failed').length}`);
}

main().catch(console.error);

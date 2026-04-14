#!/usr/bin/env node

/**
 * Add ambient sound to silent Veo videos
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate ambient sound using ffmpeg
async function generateAmbientAudio(duration, outputPath) {
  // Create subtle ambient drone with pink noise
  const cmd = `ffmpeg -f lavfi -i "anoisesrc=d=${duration}:c=pink:r=44100:a=0.02" -af "lowpass=f=400,highpass=f=60,volume=0.3" "${outputPath}" -y`;
  await execAsync(cmd);
}

// Add audio to video
async function addAudioToVideo(videoPath, audioPath, outputPath) {
  const cmd = `ffmpeg -i "${videoPath}" -i "${audioPath}" -c:v copy -c:a aac -shortest "${outputPath}" -y`;
  await execAsync(cmd);
}

async function main() {
  const videoDir = path.join(__dirname, '..', 'public', 'videos');
  const tempDir = path.join(__dirname, '..', 'temp-audio');
  
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  console.log('🔊 Adding ambient sound to videos...\n');

  // Process individual scenes
  for (let i = 1; i <= 10; i++) {
    const videoFile = path.join(videoDir, `scene-${i}.mp4`);
    
    if (!fs.existsSync(videoFile)) continue;

    console.log(`Scene ${i}:`);
    
    // Generate 8-second ambient audio
    const audioFile = path.join(tempDir, `ambient-${i}.wav`);
    console.log('  Generating ambient audio...');
    await generateAmbientAudio(8, audioFile);
    
    // Add to video
    const outputFile = path.join(videoDir, `scene-${i}-sound.mp4`);
    console.log('  Adding audio to video...');
    await addAudioToVideo(videoFile, audioFile, outputFile);
    
    // Replace original
    fs.unlinkSync(videoFile);
    fs.renameSync(outputFile, videoFile);
    
    console.log(`  ✅ Scene ${i} complete\n`);
  }

  // Regenerate full sequence with audio
  console.log('🎬 Regenerating full sequence...\n');
  
  const concatFile = path.join(tempDir, 'concat.txt');
  const scenes = [];
  for (let i = 1; i <= 10; i++) {
    scenes.push(`file '${path.join(videoDir, `scene-${i}.mp4`)}'`);
  }
  fs.writeFileSync(concatFile, scenes.join('\n'));
  
  const fullSeqPath = path.join(videoDir, 'full-sequence.mp4');
  const cmd = `ffmpeg -f concat -safe 0 -i "${concatFile}" -c copy "${fullSeqPath}" -y`;
  await execAsync(cmd);
  
  // Cleanup
  fs.rmSync(tempDir, { recursive: true, force: true });
  
  console.log('✅ All videos now have ambient sound!\n');
  console.log('📺 Deploy: npm run deploy\n');
}

main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});

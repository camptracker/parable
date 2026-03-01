import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import sharp from 'sharp';

function getOpenAIKey(): string {
  const authProfiles = JSON.parse(readFileSync(resolve(process.env.HOME!, '.openclaw/agents/main/agent/auth-profiles.json'), 'utf-8'));
  return authProfiles.profiles['openai:default'].key;
}

const OPENAI_KEY = getOpenAIKey();

async function main() {
  const dallePrompt = process.argv[2];
  const outputPath = resolve(process.argv[3]);

  if (!dallePrompt || !outputPath) {
    console.error('Usage: npx tsx scripts/generate-image.ts "<prompt>" <outputPath>');
    process.exit(1);
  }

  // Truncate prompt to 4000 chars (DALL-E limit)
  const truncatedPrompt = dallePrompt.slice(0, 4000);

  console.error('Generating image with DALL-E 3...');
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_KEY}`,
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt: truncatedPrompt,
      n: 1,
      size: '1792x1024',
      quality: 'standard',
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`OpenAI API error ${response.status}: ${err}`);
    process.exit(1);
  }

  const data = await response.json() as any;
  const imageUrl = data.data[0].url;

  console.error('Downloading image...');
  const imgResponse = await fetch(imageUrl);
  const imgBuffer = Buffer.from(await imgResponse.arrayBuffer());

  console.error('Compressing image...');
  mkdirSync(dirname(outputPath), { recursive: true });
  await sharp(imgBuffer)
    .resize(800)
    .jpeg({ quality: 80 })
    .toFile(outputPath);

  console.error(`Saved to ${outputPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

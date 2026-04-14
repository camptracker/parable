#!/bin/bash

# Quick fix: Add silent audio track to all videos

cd ~/Documents/parable/public/videos

echo "🔊 Adding silent audio tracks..."

for i in {1..10}; do
  if [ -f "scene-$i.mp4" ]; then
    echo "Processing scene-$i.mp4..."
    ffmpeg -i "scene-$i.mp4" -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100 \
      -c:v copy -c:a aac -shortest "scene-$i-audio.mp4" -y 2>&1 | grep -v "frame="
    mv "scene-$i-audio.mp4" "scene-$i.mp4"
    echo "✅ Scene $i done"
  fi
done

echo ""
echo "Regenerating full sequence..."

# Create concat file
cat > concat.txt << EOF
file 'scene-1.mp4'
file 'scene-2.mp4'
file 'scene-3.mp4'
file 'scene-4.mp4'
file 'scene-5.mp4'
file 'scene-6.mp4'
file 'scene-7.mp4'
file 'scene-8.mp4'
file 'scene-9.mp4'
file 'scene-10.mp4'
EOF

ffmpeg -f concat -safe 0 -i concat.txt -c copy full-sequence.mp4 -y 2>&1 | grep -v "frame="
rm concat.txt

echo ""
echo "✅ All videos now have audio tracks!"
echo "📺 Deploy: npm run deploy"

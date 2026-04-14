#!/bin/bash

# Manual download helper for Veo-generated videos
# Usage: ./download-video.sh <GCS_URI or local_file>

if [ -z "$1" ]; then
  echo "Usage: $0 <GCS_URI or local_file>"
  echo ""
  echo "Examples:"
  echo "  $0 gs://bucket-name/path/to/video.mp4"
  echo "  $0 ~/Downloads/generated-video.mp4"
  exit 1
fi

INPUT="$1"
OUTPUT="$(dirname "$0")/../public/videos/scene-1.mp4"

# Create videos directory if it doesn't exist
mkdir -p "$(dirname "$OUTPUT")"

# Check if input is a GCS URI
if [[ "$INPUT" == gs://* ]]; then
  echo "📥 Downloading from Google Cloud Storage..."
  gsutil cp "$INPUT" "$OUTPUT"
else
  echo "📁 Copying local file..."
  cp "$INPUT" "$OUTPUT"
fi

if [ -f "$OUTPUT" ]; then
  SIZE=$(du -h "$OUTPUT" | cut -f1)
  echo "✅ Video saved to: $OUTPUT"
  echo "   File size: $SIZE"
  echo ""
  echo "🚀 Deploy to website:"
  echo "   cd $(dirname "$0")/.."
  echo "   npm run deploy"
else
  echo "❌ Failed to save video"
  exit 1
fi

# Video Generation Scripts

Generate videos from THE KEEPERS screenplay using Google Veo API.

## Prerequisites

1. **Enable Vertex AI API** on your Google Cloud project:
   - Visit: https://console.developers.google.com/apis/api/aiplatform.googleapis.com/overview?project=parable-489408
   - Click "Enable"
   - Wait 1-2 minutes for activation

2. **Google OAuth Credentials** (already configured in scripts):
   - Client ID: `764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com`
   - Refresh token configured for project `parable-489408`

## Usage

### Generate Single Scene

```bash
# Generate scene 1 (default)
node scripts/generate-veo-video.js

# Generate specific scene
node scripts/generate-veo-video.js --scene 3
```

### Generate Multiple Scenes (Batch)

```bash
# Generate first 5 scenes (default)
node scripts/generate-all-scenes.js

# Generate first 10 scenes
node scripts/generate-all-scenes.js 10

# Generate all scenes (WARNING: expensive!)
node scripts/generate-all-scenes.js 999
```

## Output

Videos are saved to: `public/videos/`

```
public/videos/
├── scene-1.mp4         # Video file
├── scene-1.json        # Metadata
├── scene-2.mp4
├── scene-2.json
├── ...
└── manifest.json       # Batch generation summary
```

## How It Works

1. **Parse Screenplay**: Reads `screenplay/THE_KEEPERS_EPIC.fountain` and extracts scenes
2. **Generate Prompts**: Converts scene descriptions into cinematic prompts for Veo
3. **Call Veo API**: Uses Google Veo 2 (`veo-002`) to generate 8-second video clips
4. **Save Videos**: Downloads and saves MP4 files with metadata

## API Parameters

```javascript
{
  sampleCount: 1,          // Number of variations
  aspectRatio: "16:9",     // Widescreen format
  durationSeconds: 8,      // 8-second clips
  enableSound: true        // Include audio generation
}
```

## Example Scene Prompt

**Scene Header:**  
`INT. TEMPLE MOUNT ARCHIVES - ENTRANCE - NIGHT - PRESENT DAY`

**Generated Prompt:**  
```
Cinematic establishing shot: TEMPLE MOUNT ARCHIVES - ENTRANCE. 
EZRA (late 20s, brilliant, searching) descends ancient stone steps. 
His oil lamp reveals walls covered in carvings that shift between 
ancient Hebrew and modern code. Professional cinematography, 
dramatic lighting, film grain, 24fps aesthetic.
```

## Cost Estimates

Google Veo pricing (as of 2026):
- ~$0.40 per 8-second clip
- Full screenplay (15+ scenes): ~$6-8
- Budget accordingly!

## Troubleshooting

### Error: "Vertex AI API has not been used"
- Enable the API at the link above
- Wait 2-3 minutes after enabling
- Try again

### Error: "PERMISSION_DENIED"
- Check that OAuth credentials are valid
- Ensure project ID is correct (`parable-489408`)
- Verify refresh token hasn't expired

### Rate Limiting
The batch script includes 5-second delays between requests to avoid hitting rate limits.

## Integration with Website

Once videos are generated, they're automatically available at:
- Local: `http://localhost:5173/videos/scene-1.mp4`
- Production: `https://camptracker.github.io/parable/videos/scene-1.mp4`

The screenplay page will automatically detect and display generated videos.

## Next Steps

1. Enable Vertex AI API
2. Run single scene test: `node scripts/generate-veo-video.js`
3. Verify video quality
4. Run batch generation: `node scripts/generate-all-scenes.js 5`
5. Deploy videos to website

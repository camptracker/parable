# THE KEEPERS - Video Generation Guide

Complete guide to generating cinematic videos from the screenplay using Google Veo.

## Quick Start

### 1. Enable Google Veo API

**Required:** Enable Vertex AI API on your Google Cloud project

👉 **Click here to enable:** https://console.developers.google.com/apis/api/aiplatform.googleapis.com/overview?project=parable-489408

- Click the "Enable" button
- Wait 1-2 minutes for activation
- Refresh the page to confirm it's enabled

### 2. Generate Test Video

```bash
# Generate first scene
npm run generate:scene

# Or generate specific scene
npm run generate:scene -- --scene 3
```

### 3. Generate Multiple Scenes

```bash
# Generate first 5 scenes (recommended for testing)
npm run generate:batch

# Generate first 10 scenes
npm run generate:batch 10

# Generate ALL scenes (expensive - 15+ scenes!)
npm run generate:all
```

## What Gets Generated

### Video Specs
- **Format:** MP4 (H.264)
- **Resolution:** 1920x1080 (16:9)
- **Duration:** 8 seconds per scene
- **Audio:** Enabled (ambient sound generation)
- **Quality:** Professional cinematic

### Output Structure

```
public/videos/
├── scene-1.mp4              # Opening scene video
├── scene-1.json             # Metadata (prompt, timestamp)
├── scene-2.mp4
├── scene-2.json
├── ...
└── manifest.json            # Generation summary
```

## Example Output

### Scene 1: Temple Mount Archives Entrance

**Screenplay:**
```
INT. TEMPLE MOUNT ARCHIVES - ENTRANCE - NIGHT

EZRA descends ancient stone steps. His oil lamp 
reveals walls covered in carvings that shift 
between ancient Hebrew and modern code.
```

**Generated Prompt:**
```
Cinematic establishing shot: TEMPLE MOUNT ARCHIVES - ENTRANCE. 
EZRA (late 20s, brilliant, searching) descends ancient stone 
steps. His oil lamp reveals walls covered in carvings that 
shift between ancient Hebrew and modern code. Professional 
cinematography, dramatic lighting, film grain, 24fps aesthetic.
```

**Result:**
- 8-second cinematic video
- Dramatic torch-lit atmosphere
- Ancient meets modern visual style
- Ambient sound design

## How It Works

### 1. Screenplay Parsing
```javascript
// Reads THE_KEEPERS_EPIC.fountain
// Extracts scene headers (INT./EXT.)
// Captures descriptions and dialogue
// Identifies 15+ distinct scenes
```

### 2. Prompt Generation
```javascript
// Converts screenplay format to cinematic descriptions
// Adds professional cinematography keywords
// Optimizes for Veo's video generation
// Includes lighting, style, mood directives
```

### 3. Veo API Call
```javascript
{
  model: "veo-001",
  prompt: "Cinematic scene description...",
  parameters: {
    aspectRatio: "16:9",
    durationSeconds: 8,
    enableSound: true
  }
}
```

### 4. Video Processing
```javascript
// API returns video as base64 or GCS URL
// Script downloads and saves as MP4
// Metadata saved for reference
// Manifest tracks all generations
```

## Cost & Performance

### Pricing (Estimated)
- **Per scene:** ~$0.40 (8-second clip)
- **5 scenes:** ~$2
- **Full screenplay (15 scenes):** ~$6-8

### Generation Time
- **Single scene:** 30-60 seconds
- **Batch (5 scenes):** 3-5 minutes
- **Full screenplay:** 10-15 minutes

### Rate Limits
- Built-in 5-second delays between requests
- Prevents API throttling
- Ensures reliable generation

## Troubleshooting

### "Vertex AI API not enabled"
**Solution:** Enable the API at the link above, wait 2 minutes, retry

### "PERMISSION_DENIED"
**Check:**
- OAuth credentials are valid (they are - pre-configured)
- Project ID is correct (`parable-489408`)
- API is fully enabled (may take 2-3 min)

### "Rate limit exceeded"
**Solution:** Wait 1 minute, retry. Batch script handles this automatically.

### Low quality output
**Adjust prompt:** Edit `sceneToPrompt()` in `generate-veo-video.js`:
```javascript
// Add more cinematic keywords
return `Epic cinematic shot, film noir lighting, 
        professional cinematography, 8K quality, 
        ${setting}. ${description}`;
```

## Advanced Usage

### Custom Scene Selection

```bash
# Generate scenes 5-10
node scripts/generate-veo-video.js --scene 5
node scripts/generate-veo-video.js --scene 6
# ... etc
```

### Custom Prompts

Edit `scripts/generate-veo-video.js`:

```javascript
function sceneToPrompt(scene) {
  // Your custom prompt generation logic
  return `Ultra-cinematic ${scene.header}...`;
}
```

### Batch Processing Specific Scenes

Edit `scripts/generate-all-scenes.js`:

```javascript
// Generate only scenes 1, 5, 10
const scenesToGenerate = [scenes[0], scenes[4], scenes[9]];
```

## Integration with Website

### Auto-Display on Screenplay Page

Once videos are generated, the screenplay page automatically:
1. Detects videos in `public/videos/`
2. Displays them inline with screenplay text
3. Provides playback controls
4. Shows generation metadata

### Deployment

```bash
# Generate videos
npm run generate:batch

# Deploy to GitHub Pages (includes videos)
npm run deploy
```

Videos will be available at:
```
https://camptracker.github.io/parable/videos/scene-1.mp4
https://camptracker.github.io/parable/videos/scene-2.mp4
...
```

## Production Workflow

### Recommended Process

1. **Test Single Scene**
   ```bash
   npm run generate:scene
   ```
   
2. **Review Quality**
   - Check `public/videos/scene-1.mp4`
   - Verify cinematic style
   - Confirm audio works

3. **Generate Key Scenes**
   ```bash
   npm run generate:batch 5
   ```

4. **Deploy Preview**
   ```bash
   npm run deploy
   ```

5. **Iterate on Prompts**
   - Adjust `sceneToPrompt()` if needed
   - Regenerate specific scenes
   - Fine-tune for best quality

6. **Full Generation**
   ```bash
   npm run generate:all
   ```

7. **Final Deployment**
   ```bash
   npm run deploy
   ```

## Future Enhancements

### Planned Features
- [ ] Scene transitions
- [ ] Background music integration
- [ ] Dialogue audio synthesis (Google TTS)
- [ ] Full movie compilation
- [ ] Chapter markers
- [ ] Subtitle generation

### Veo 3 Migration
When Veo 3 API becomes available:
1. Update model name: `veo-001` → `veo-3`
2. Adjust duration: `8` → `16` seconds
3. Enable advanced features (camera control, etc.)

## Support

### Google Cloud Console
- Project: https://console.cloud.google.com/home/dashboard?project=parable-489408
- Vertex AI: https://console.cloud.google.com/vertex-ai?project=parable-489408

### Documentation
- **Veo API Docs:** (Check Vertex AI documentation)
- **Script README:** `scripts/README.md`
- **Screenplay:** `screenplay/THE_KEEPERS_EPIC.fountain`

---

**Ready to generate videos?**

```bash
npm run generate:scene
```

🎬 Let's make cinema!

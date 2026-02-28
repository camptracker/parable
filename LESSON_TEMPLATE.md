# Daily Lesson Series — Reusable Template

> Cron jobs should pass these variables:
> - `SERIES_ID` — URL slug (e.g. "financial-independence")
> - `SERIES_NAME` — Display name (e.g. "Financial Independence")
> - `SERIES_THEME` — Description (e.g. "Warren Buffett's teachings and mathematical principles")
> - `SERIES_EMOJI` — Lesson emoji (e.g. 💰, 🍎)
> - `SERIES_WISDOM_LABEL` — Label for wisdom section (e.g. "Buffett Wisdom", "Science Wisdom")
> - `PARABLE_CHARACTERS` — Character descriptions for parable continuity
> - `RECIPIENTS` — Who to send to

---

## STEP 1: READ PREVIOUS LESSON
- Read ~/Documents/parable/src/data/lessons.ts
- Find the series with id matching `SERIES_ID`
- Find the latest lesson (highest day number)
- Note its follow-up question, title, and key concepts
- The NEW lesson must directly answer that follow-up question and build on it

## STEP 2: GENERATE THE STANDARD LESSON
Keep it SHORT and SIMPLE. One core idea only. Use this format:

{SERIES_EMOJI} Day X: [Title]

[1-2 sentence review of previous lesson + answer to its follow-up question]

🧱 The Concept
[What the principle is — 1-2 sentences]

❓ Why It Matters
[Why this idea is important for {SERIES_NAME} — 2-3 sentences]

⚙️ How It Works
[Simple analogy or story, explain like talking to a 5-year-old — 3-5 sentences]

📖 Definitions
• Term: Definition
• Term: Definition

🎯 {SERIES_WISDOM_LABEL}
[A relevant quote or insight — 1-2 sentences]

❓ Tomorrow's Question:
[One follow-up question that naturally leads into the next concept]

## STEP 3: GENERATE THE PARABLE VERSION
- Rewrite the same lesson as a compelling fable/parable
- Continue the story using {PARABLE_CHARACTERS}
- Must teach the EXACT same concept through storytelling
- Continue from previous parables' narrative arc
- Make it memorable, engaging, timeless wisdom

## STEP 4: WRITE A SONNET
- Write a 14-line Shakespearean sonnet (3 quatrains + couplet, ABAB CDCD EFEF GG rhyme scheme)
- The sonnet should poetically capture the lesson's core concept
- Title it: 🪶 Sonnet [Roman numeral]: [Poetic Title]
- *Italicize the final couplet* as the takeaway
- The sonnet imagery will be used to generate the hero image

## STEP 5: GENERATE HERO IMAGE FROM SONNET
- Based on the sonnet's imagery, create a DALL-E 3 prompt
- Style: Classical oil painting, Rembrandt lighting, rich golden amber tones, dramatic chiaroscuro, poetic and timeless
- Generate via OpenAI API:
  curl -s https://api.openai.com/v1/images/generations \
    -H 'Authorization: Bearer $OPENAI_API_KEY' \
    -H 'Content-Type: application/json' \
    -d '{"model":"dall-e-3","prompt":"YOUR PROMPT HERE","n":1,"size":"1792x1024","quality":"standard"}'
- Download to ~/Documents/parable/public/images/{SERIES_ID}/day-X.png (create dir if needed)

## STEP 6: UPDATE THE WEBSITE
1. Edit ~/Documents/parable/src/data/lessons.ts — find the series with id "{SERIES_ID}" and add the new lesson to its lessons array
2. Lesson format: { day, title, date, image: 'images/{SERIES_ID}/day-X.png', sonnet, standard, parable }
3. Run:
   cd ~/Documents/parable && npm run build && npx gh-pages -d dist
   git add -A && git commit -m 'Add {SERIES_NAME} Day X: [title]' && git push

## STEP 7: SEND VIA TELEGRAM
- Send the STANDARD version text to {RECIPIENTS}
- Include the website link: https://camptracker.github.io/parable/#/{SERIES_ID}/lesson/[day]

---

> The series builds organically via follow-up questions. Do NOT follow a hardcoded sequence.

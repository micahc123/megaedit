---
user-invocable: false
name: character
description: Design an original recurring character for Megaedit — body, face, hair, outfit, colours, voice and personality — and add it to the cast. Use for "make a character", "add a sidekick", "give the series a villain", or when a script needs someone who isn't in the cast yet.
---

# Building a character

Characters are drawn by the engine from a spec, so every style can show them. Call `cast`
to see who exists first; reuse before you invent.

A character spec (`cli` with `["characters", "new", ...]`):
```json
{ "id": "maya", "name": "Maya", "body": "bean", "skin": "#c98e62",
  "hair": { "style": "curly", "color": "#2b1d14" }, "eyes": "wide",
  "outfit": { "top": "#3d7a5c", "bottom": "#2a2f3a", "pattern": "stripe" },
  "accessory": "headphones", "voiceId": "<optional ElevenLabs voice>",
  "personality": "over-prepared, deadpan, secretly kind" }
```
Body: bean, blob, block, tall, round. Hair: none, short, spiky, bun, long, curly, cap, beanie, mohawk, bob. Eyes: dot, oval, sleepy, wide, anime. Accessory: none, glasses, sunglasses, headphones, scarf, bowtie, chain, backpack.

## Rules
- **Original only.** Don't recreate a character from a show, game, film or another creator, even renamed. If the member describes one, make something that keeps the feeling but changes the look, the name and the personality.
- Give each character one clear trait the audience can learn in a scene, and a silhouette that differs from the rest of the cast (different body or hair).
- Two or three main characters per series, max. Add the character to the project's cast and, for series, to the series cast.
- `look` at a dialogue scene with the new character before you call it done.

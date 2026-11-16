---
user-invocable: false
name: megaedit-paper2d
description: Write a Megaedit script.json in the Paper 2D style, a handmade cut-paper explainer with warm cardstock, ink outlines and paper-doll characters. Use when the user wants a friendly desk-top or notebook explainer, a how-it-works, a small story or a "here is how I did it" reel.
---

# Paper 2D

Warm cut-paper world. Cardstock pieces, ink outlines, soft shadows, characters like paper dolls. It feels homemade and kind. Best for process, hero, big-number and compare.

## Layouts that work
- **hero**: one character plus one or two props on a desk. Opening beats and reactions.
- **process**: 3 steps on paper cards joined by a line. The signature layout; keep each step under 5 words.
- **big-number**: one number, one label. Use it once per episode.
- **compare**: before and after halves. Pair with a sad pose then cheer.
- **dialogue**: two characters, one short line each (under 8 words).
- Also fine: title, split, list, reveal, choice, recap, quote, cta.

## Settings
desk (default), corkboard, notebook, blueprint, kitchen-table, night-sky. Use `notebook` for steps, `corkboard` for numbers, `night-sky` for the ending.

## Pacing
About 3.4 words per second. 7 to 8 scenes, 24 to 30 seconds of VO, 12 to 15 words a scene. One idea per scene.

## Captions
`bold-pop` (default) lower third, 2 to 3 words at a time, accent colour on the emphasis word.

## Do
- Plain spoken English, "you" and "I". One rounded number per sentence.
- Open with a small personal problem or surprise.
- Use `emphasis` on the one word that should pop.
- Vary the camera: push-in on reveals, shake on mistakes, static on lists.
- End with a one-word comment keyword in the cta.

## Don't
- No income claims, no stats you cannot source.
- No more than 4 items per list or process, no headline over 6 words.
- Don't stack camera moves on every scene; keep two or three static.
- At most 5 hashtags in the caption.

## script.json example
```json
{
  "title": "The paper plane that flies",
  "hook": "I folded forty paper planes before one actually flew.",
  "scenes": [
    { "id": "s01", "text": "I folded forty paper planes before one actually flew.",
      "visual": { "layout": "title", "headline": "The plane that flew", "subhead": "fold number forty-one",
        "setting": "desk", "camera": "push-in", "characters": [{ "ref": "pip", "pose": "cheer", "position": "center" }] } },
    { "id": "s03", "text": "Then Juno showed me the trick, and it is only three folds.",
      "visual": { "layout": "process", "headline": "Three folds",
        "items": ["Fold it in half", "Fold both corners in", "Fold the wings down"], "setting": "notebook" } }
  ],
  "cta": "Comment PLANE and I will send you the fold."
}
```
A full worked episode is in `example/` (megaedit.json plus script.json).

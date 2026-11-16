---
user-invocable: false
name: megaedit-flat
description: Write a Megaedit script.json in the Flat Vector style, a clean motion-design-studio explainer with bold geometric shapes, icons, Unbounded display type and springy motion. Use for how-to, productivity, tech or business explainers, charts, process steps and lists.
---

# Flat vector

Premium motion-design-studio look. Solid shapes, no texture, big circles, rounded colour tiles with icons, headlines that rise out of masks. Charts and process steps are where it shines.

## Layouts that work
- **process**: 3 to 5 steps on a track that fills as the VO moves. Signature.
- **list**: tiles with icons, 3 items, short.
- **big-number**: bar-chart backdrop, one counter. Signature.
- **split**: two panels, A versus B; supply `items` for labels and `props` for icons.
- Also fine: title, hero, dialogue, reveal, choice, compare, recap, quote, cta.
- Give most scenes a prop; the style is icon-heavy.

## Settings
studio (default), city, office, phone-screen, chart-room, outdoors. `chart-room` for numbers, `office` for steps.

## Pacing
About 3.6 words per second. 7 to 8 scenes, 24 to 28 seconds of VO, 10 to 14 words a scene. Brisk but clear.

## Captions
`boxed` (default): white box, ink text, accent on the emphasis word. `bold-pop` also works.

## Do
- Headline 2 to 5 words, title case or sentence case.
- One number per scene, rounded ("ten minutes").
- Say what each icon means in plain words.
- Alternate shape-heavy scenes (process, big-number) with character scenes.
- Plain English, "you" and "I", no jargon.

## Don't
- No texture, drop shadows or gradients; keep every shape flat.
- No more than 5 items; no paragraph text on screen.
- No income claims, no unsourced stats.
- At most 5 hashtags.

## script.json example
```json
{
  "title": "Plan your week in three steps",
  "scenes": [
    { "id": "s02", "text": "Here is how I do it every Sunday, and it takes about ten minutes.",
      "visual": { "layout": "big-number", "number": { "value": 10, "suffix": " min", "label": "every Sunday" },
        "setting": "chart-room", "props": [{ "kind": "clock" }] } },
    { "id": "s03", "text": "First, write down everything on your mind, even the tiny stuff.",
      "visual": { "layout": "process", "headline": "Three steps",
        "items": ["Dump it all", "Pick the big three", "Give each a day"],
        "props": [{ "kind": "book" }, { "kind": "target" }, { "kind": "check" }], "setting": "office" } }
  ],
  "cta": "Comment WEEK and I will send you the template."
}
```
See `example/` for the full episode.

---
user-invocable: false
name: megaedit-collage
description: Write a Megaedit script.json in the Paper Collage style, a zine look with torn-paper edges, halftone cut-outs, ransom-note headlines, tape strips and a handheld camera in Fraunces and Instrument Serif. Use for essays, mysteries, quotes, stories and reflective explainers.
---

# Paper collage

A moving zine. Torn paper, halftone "photos" of shapes, cut-out letters, tape, rubber stamps and a marker circle that draws itself. Slower and more thoughtful than the other styles.

## Layouts that work
- **title**: ransom-note headline over a taped halftone photo with a sticker character. Signature.
- **quote**: big serif quote on a torn page with a highlighter swipe. Signature.
- **reveal**: a black cover sheet peels away to show the object. Signature.
- **compare**: grey halftone before, colour after.
- Also fine: hero, split ("vs." stamp), list, process (fig. 1, fig. 2), big-number (marker ellipse), dialogue, choice (hand-drawn tick and X), recap (struck through list), cta (rubber stamp).

## Settings
newsprint (default), map, gallery-wall, street, archive, stage.

## Pacing
About 3.3 words per second, so room to breathe. 7 to 8 scenes, 28 to 32 seconds of VO, 10 to 18 words a scene.

## Captions
`serif-tiles` (default) or `subtle`. Words land as cut paper tiles.

## Do
- Write it like a short essay or mystery: image, detail, turn, open ending.
- Use concrete objects (a coat, a key, a map) as the props.
- Keep ransom headlines to 4 words or fewer; quotes under 12 words.
- Let one beat be quiet: a reveal or a single line.
- Plain spoken English, "I" and "you", at most one rounded number a sentence.

## Don't
- No income claims; at most 5 hashtags.
- Don't ransom-note long phrases; it gets unreadable.
- Don't use whip or shake cameras; the handheld wobble is already there.
- Don't cram more than 4 list items.

## script.json example
```json
{
  "title": "The note in the old coat",
  "scenes": [
    { "id": "s03", "text": "It said, in blue ink, meet me where the trams turn around.",
      "visual": { "layout": "quote", "quote": { "text": "Meet me where the trams turn around.", "who": "unsigned" },
        "setting": "newsprint", "camera": "static" } },
    { "id": "s06", "text": "Behind a loose brick, there was a small key.",
      "visual": { "layout": "reveal", "headline": "A small key", "setting": "gallery-wall",
        "props": [{ "kind": "key" }], "emphasis": ["key"] } }
  ],
  "cta": "Comment NOTE and I will send you the next page."
}
```
See `example/` for the complete episode.

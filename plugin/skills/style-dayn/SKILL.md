---
user-invocable: false
name: megaedit-dayn
description: Write a Megaedit script.json for the Day-N style, a warm story series where every episode carries a DAY N badge, running counters, a "Previously" recap, a top-comment-decided card and a cliffhanger end card. Use for ongoing build-it, try-it or survive-it stories where the audience's comments pick what happens next.
---

# Day-N

A series people follow. Characters are big and warm in front of a soft sunset city, garage or beach. On top of every scene sits the series chrome: a DAY N badge, up to three counters, and, at the right moments, a recap card and the comment that decided this episode. Slow and story-led: one small real step per episode.

## Needs series memory
Day-N episodes read `series.json` (schema SeriesSchema) next to the project. It holds the premise, cast ids, counters, rules, past episodes (number, title, summary) and `next.decidedBy`, the winning comment with author and like count. The project's `series` field points at it: `{ "id": "street-treehouse", "episode": 3 }`. Counters on screen come only from `series.json`, never from your script.

## How the series pieces show up
- **Badge**: always on. "DAY 3" top left; counters top right (compact numbers, key as label).
- **Recap**: the engine builds the line `Day N: <summary>` from the last episode. Open the episode with a **recap** layout scene to show it in your own words; if scene 1 is a recap layout the overlay skips its own card, otherwise it shows a small "Previously" card for 3 seconds.
- **Decision card**: a **quote** scene with `"extra": { "decision": true }` shows the winning comment, author and likes full size. If you skip it, a small card appears at the start by itself. Say the comment out loud in that scene.
- **Cliffhanger**: the last **cta** scene is the end card ("To be continued", the open question, a pill with the ask, "Day N+1 follows your top comment"). Set `"extra": { "cliffhanger": true }`.

## Layouts that work
- **recap** (scene 1), **quote** with decision (scene 2), then title, hero and dialogue for the story.
- **big-number** for a real counter moment, **choice** for the next-decision question, **cta** at the end. Every layout is drawn.

## Settings
garage, gym, court, street, office, beach, field, workshop. Keep one place per series and change it only when the story moves.

## Pacing
About 3.3 words per second, slow on purpose. 7 to 8 scenes, 28 to 32 seconds of VO, 11 to 16 words a scene. Let the problem land, then breathe.

## Captions
`karaoke` (default), `bold-pop` also works.

## Do
- Recap in one line, then the new problem inside three seconds.
- Credit the commenter by their actual comment.
- One small, real step. A rope ladder, not a finished treehouse.
- Plain English, "you" and "I". Round every number.
- End on a question the comments can answer in a few words.

## Don't
- No invented counters, no early wins, no income claims.
- No fake commenter names.
- No more than 5 hashtags.

## script.json example
```json
{
  "title": "Day 3: the rope ladder",
  "scenes": [
    { "id": "s01", "text": "Last time we built the floor out of old pallets. It wobbles, but it holds Pip.",
      "visual": { "layout": "recap", "setting": "street", "headline": "Previously" } },
    { "id": "s02", "text": "And you decided the next step: a rope ladder first, then a slide.",
      "visual": { "layout": "quote", "setting": "street", "extra": { "decision": true } } },
    { "id": "s08", "text": "The slide won't fit. Cut it shorter, or build a bigger platform? Tell me below.",
      "visual": { "layout": "cta", "setting": "street", "headline": "Shorter slide or bigger platform?",
        "subhead": "Comment it", "extra": { "cliffhanger": true } } }
  ]
}
```
See `example/` for the full episode and `example/series.json` for two episodes of memory.

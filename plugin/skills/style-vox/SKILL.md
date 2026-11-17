---
user-invocable: false
name: megaedit-vox
description: Write a Megaedit script.json in the Vox explainer style, archival prints torn out on paper, a paper map that dives to a place, a retypeset document with a highlighter sweep, a chart on graph paper, a stat slip and a source tag on every number, with hard cuts on spoken words
---

# Vox explainer

A calm, sourced explainer: a narrator, a fact a sentence, and a new picture on the beat. Every shot is data in `script.json` (`scene.visual.extra`), so any topic works: how a thing began, why a number is what it is, a map of who did what.

## Shape (6 to 8 scenes, 40 to 60 s, about 2.9 words a second)
1. **Hook** (3 s): one odd, true fact. A print or a stat, never a title card.
2. **Where**: a map that dives from the world to the place.
3. **The number**: a chart or stat slip with its `source`.
4. **The paper**: a `doc` shot with the key sentence highlighted on the word.
5. **The turn**: a second map or print that shows the consequence.
6. **The date**: a stat slip: the year it became law, or the number that matters.
7. **Close**: a collage and a `title` card on the last line.

Numerals in the text ("1883", "10 minutes") so the captions match the picture. Cut on a spoken word, not on a beat of time.

## The bible (`extra.bible` on scene 1)
`series` (channel mark on title cards, up to 30 characters), `accent` (one #hex for the whole episode, default red #d6264f).

## Shots (`extra.shots`, up to 8 a scene, or one bare shot)
Every shot has `at` (a cue; the first starts at 0), and optionally `source`, `lower` (name and role), `slip` (a stat slip over the picture), `ground` (warm|cool|kraft|dark), `drift`.
- `collage`: `photos` (1 to 4 prints), `ghost` (a big word behind). Prints are laid out for you unless you give `x`, `y`, `w`.
- `photo`: one picture, `src`, `caption`, `tint` (sepia `#d9c7a5`), `full` for full-bleed.
- `map`: `cam` (lon, lat, span in degrees; a span of 360 is the world, 8 is a state), `hl` (ISO-3 or, with `states`, US postal codes), `labels` (kind: country, water, city, callout), `routes`.
- `doc`: `title` (masthead), `head`, `body` (wrap the words to mark in `==double equals==`), `hl` (one cue per mark), `cam` (page pixels, z up to 1.3 in a 9:16 frame).
- `chart`: `bar` or `line`, `data` (each point has its own `at`), `max`, `mark`, `notes`.
- `ink` is a field on every shot (see Ink).
- `title`: `kicker`, up to 3 `lines`, `mark` (the phrase that gets the highlighter).
- `stat`: `big` (up to 12 characters), `line`, `hiAt`.

## Cut rate (measured on the reference: 15 cuts in 68 s, one every 4.5 s)
Give every scene 2 to 4 shots, so the picture changes about every 3 to 4 s, and cut on a spoken word (`at: "word"`). A 7 s scene is three shots: a print or map, the number on a chart or `stat`, the consequence. Never hold one picture for a whole scene. Reuse a bundled print with a different crop or `ink` rather than hold it.

## Ink (hand-drawn marks, on any shot)
`ink`: up to 4 marker strokes drawn on over the picture, each on its own word. `type`: `arrow` (x,y to x2,y2), `underline` (x,y to x2), `circle` (centre x,y, radius `r` as a fraction of the width), `cross`. All positions are fractions of the frame (0 to 1); `text` adds a handwritten word. Use one or two per shot, to point at the thing the voice names.

## Cues
A cue is seconds from the scene start, or a spoken word: `"tide"`, the second one `"tide#2"`, or `"tide+0.3"`. A word cue cuts 0.1 s early so the picture lands before the word.

## Pictures
`src` is one of the bundled public-domain prints (`ph/bristol-clock.jpg`, `ph/standard-time-1906.jpg`, `ph/grand-central-1880.jpg`, `ph/timetable-1883.jpg`, `ph/depot-1880.jpg`, `ph/dale-creek-1885.jpg`, `ph/rio-las-animas-1882.jpg`, `ph/chicago-alton-1884.jpg`) or a file in the project (`media/x.jpg`). Only public domain or CC0 pictures; put the credit in `source`. Maps are Natural Earth.

## Rules
- A `source` on every number, document and map. Say what it is, not "Google".
- One accent colour. No emoji, no cartoon.
- Labels are big on purpose (phones): keep at most 4 map labels, stagger them with `dy` if they touch.
- Content sits in the top 70% of the frame; captions take the lower band.
- `megaedit check` warns on a cue that is not in the line, a missing picture, and a number with no source.

See `playbook.md` for the voice and `example/` for a worked project.

## Never an empty frame (engine + authoring rules)
- The engine now puts a dim layer stack (halftone dots, ghost word, two torn prints from the episode's own photos) behind every photo, stat and collage shot, and re-frames (hard punch-in / rotate) every ~1.5 s inside a long shot. Do not rely on it: author shots to be full.
- Every beat should layer at least two of photo + map/doc + stat slip. Prefer 3 shots per scene (about 2 s each) over one long shot; target a visible cut every 1.5-2 s.
- Never ship a bare paper ground: a stat or title shot still gets a `ghost` word and a `photos` collage behind it.

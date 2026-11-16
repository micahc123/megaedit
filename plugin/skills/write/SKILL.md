---
user-invocable: false
name: write
description: Write or rewrite a Megaedit script.json from a topic, brief or rough idea — hook, scenes, visuals and emphasis words that fit the project's style. Use when the member asks for a new script, a rewrite, "make it funnier", "shorter", or gives a topic.
---

# Writing a script

## Before you write
- Read `megaedit.json` (style, language, cast, series) and call `style_guide`. Each style has its own beat shape: follow it rather than a generic explainer shape.
- If the project is part of a series, call `series_brief` first: it gives the story so far, recurring cast and what the comments decided. Never contradict an earlier episode.
- Read `brief.md` if it exists. If `structure.md` exists, follow it (see below): it overrides the default shape.

## Following a copied structure (`structure.md`)
When the project has `structure.md` (made by "Copy a viral reel" / `clone_structure`), it is the beat sheet. It copies the structure, not the content.
- One scene per row of its **Scene plan**, same order. Keep each scene's role (hook, setup, turn, reveal, payoff, cta…), its seconds and roughly its word target. If a row has a **Hold**, set the scene's `hold` to it.
- Match the **hook kind** and **ending type** it names (a question hook gets your own question; a loop ending runs back into the first shot or line).
- Where the reference had several shots inside one beat, change the picture inside the scene (camera move, a new prop, a reveal).
- The **Reference beats** table is for timing only. Never reuse its words, phrases, jokes, names, characters or art: `megaedit check` rejects any 5-word run lifted from it. Write about the member's topic in your own words.
- The style guide still decides the visuals. If the reference has no narration and the style has a silent format (pixel `format: "micro"`), use it with the plan's `beats`.

## Shape (default for a ~30 s explainer; the style guide wins if it differs)
- 7–8 scenes, ~22 words each at a normal pace. Whole script ~150–170 words.
- `s01` = the hook. It's also `hook` at the top of the script (same text). Funny or emotional, under 3 seconds.
- Middle scenes: one idea each, each answering the one before. Use "so", "but", "and" to hand off.
- Last scene: the payoff or the cliffhanger. A `cta` only if the member asked for one (e.g. "comment MEGA").

## Each scene
```json
{ "id": "s02", "text": "what is said, the way you'd say it",
  "visual": { "layout": "split", "headline": "few big words", "props": [{ "kind": "phone" }],
              "setting": "desk", "camera": "push-in", "transition": "wipe", "emphasis": ["word"] } }
```
- **layout**: title, hero, split, list, process, big-number, dialogue, reveal, choice, recap, compare, quote, cta. Vary them: never three of the same in a row.
- `big-number` needs `number`; `choice` needs `choice {a, b}`; `compare` needs `compare {before, after}`; `quote` needs `quote`; `dialogue` needs `characters` with `line`s; `list` / `process` need `items` (3–5).
- **characters** refer to people by `ref` (call `cast` to see who exists). Give each a `pose` and `position`. The speaker of a scene goes in `speaker`. A video with someone in it beats props alone: unless the style or the member says otherwise, put a host in most scenes. The starter characters (`pip`, `juno`, `rafi`, `mo`, `bea`, `otto`) draw as soon as a scene uses their `ref`, even when the project's cast is empty.
- Never write character objects into `cast` in `megaedit.json` by hand. To use one of the member's own characters, add its id to that list as a plain string (`"cast": ["nova"]`) and Megaedit fills in the rest; in the script just use the `ref`.
- **props**: from the shared prop set (`library` tool lists them). One to three, not six.
- **emphasis**: one or two words from the VO that the captions should pop.
- **setting**, **camera**, **transition**: from the style guide's lists.

## After writing
Save, let the hook check it, then `look` at s01 and two other scenes. Read the whole VO once as one paragraph: if it doesn't flow like someone talking, fix the joins.

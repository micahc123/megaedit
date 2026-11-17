---
user-invocable: false
name: megaedit-zackd
description: Write a Megaedit Zack D-style 3D body explainer Short (style id `zackd`), the "what is actually happening inside your body" kind of video, with a photoreal person in a real room, macro cutaway worlds in a cyan void, x-ray fades and wet glossy close-ups, rendered in Blender with the Zack D kit. Use for any body / science / "why do you…" explainer Short and when the member names the Zack D. Films look. Needs Blender (setup installs it, free).
---

# Zack D-style 3D (Zack D kit)

Real 3D, rendered in Blender: a photoreal person in a lived-in room, extreme close-ups of skin, eyes and mouth, then a
dive *inside* the body into macro worlds (blood vessels, cell fields, organ slabs) floating in a bright cyan void, x-ray
fades that show the skeleton, and wet glossy fx (flush, sweat, tears, eye gunk). Megaedit makes the voice (ElevenLabs);
the kit grades, adds 2-word captions, music and SFX. The style id is `zackd`.

## The episode
- **30 to 45 seconds, about 2.85 words a second** (90 to 125 words). 8 to 11 scenes; every scene is one or two short sentences.
- **16 to 24 shots in total**: a new shot every 1.5 to 2.5 seconds, always on a spoken word.
- Formula (what the big body-explainer channels run):
  1. **You-hook** on an everyday moment, said to the viewer ("Someone says your name, and your face goes hot.").
  2. **"This is what it actually is"**: name the real thing in one line, then dive inside.
  3. **The mechanism in three beats**, each one a new macro world or an x-ray.
  4. **The "But" / "You can't…" turn**: the surprising part.
  5. **The payoff image** and a calm last line that lands on the person again.
- Plain words, round numbers, no medical advice, at most 5 hashtags.

## Two files
1. **`script.json`** (the normal Megaedit script, `new_project` style `zackd`): scenes with `text` and
   `visual.extra.shots`, a list of **kit shots**. The first shot starts with the scene; each later shot has
   `"at": "<the words it starts on>"`. The kit writes the captions from the voice; you don't.
2. **`zackd.json`** in the project folder (write the file yourself): the world.
   `{ "room": "living", "cast": { "ben": { "name": "Ben", "eyes": "hazel" } } }`
   `room`: `living`, `studio` or `night`. Cast `eyes`: `hazel`, `blue`, `green` (brown when unset); optional `skin` and `hair: {"color": [r,g,b]}`.

Read `example/script.json` and `example/zackd.json` before writing: a 20-shot blushing explainer. Copy its patterns
(when to dive, when to x-ray, how close the camera sits), not its story.

## Shot keys (`visual.extra.shots[]`)
The kit infers the shot kind: a `world` makes a **macro** shot, an `xray` makes an **x-ray** shot, fx or a close target make an **ecu**, otherwise a **set** shot.
- `target`: `full chest head face eye eye_l eye_r corner cheek_l cheek_r nose mouth ear neck hand_l hand_r forearm_l forearm_r`
- `cam` (the move): `push pull orbit rise slide dive hold`; `amt` scales it (0.5 gentle, 1.3 strong). `az` / `el` swing the angle in degrees; `lens`, `fstop`, `dist` override.
- `pose`: `stand sit cross hands-up`. `expr`: `neutral smile shy surprise wince worried talk grin`. `look`: where the eyes point.
- `fx`: a list of `{ "fx": "flush|sweat|tear|gunk", "where": "cheeks|face|ears|neck|all" (flush; sweat, tear and gunk sit where they belong), "strength": 0-1, "t0": seconds into the shot, "ramp": seconds }`.
- `xray`: `{ "t0": 0.2 }` fades skin to bone from that time; use on `head`, `chest` or `hand_*`.
- Macro: `world` `vessels|slab|field|organ`, `cells` `rbc|bubble`, `count` 40-120, `thing` `liver|intestines|skeleton|rbc|macrophage`,
  `dilate` 0-1 (vessels widen), `speed`, `seed` (a different layout), `color`.
- `tr` (the cut into this shot): `cut` (default), `dissolve`, `zoom`, `whip`. `sfx`: `whoosh swish squelch slosh tick pop thud creak crackle clunk`.

## Rhythm that scores
- Open on the person, close (`chest` or `face`) with a push. Never open in a macro world.
- Every mechanism line goes inside: alternate person, macro, person, macro. Two macro shots in a row only when the line keeps going inside.
- One x-ray per 15 seconds at most, always on the word that names the inside part.
- End on the person's face (`face` or `eye`), a slow push, a soft expression.

## Make it
`megaedit check`, then `megaedit voice`, then `megaedit still --scene s03` (draft frames; look at them), then
`megaedit render`. Renders run Blender on the member's machine or their render box (`MEGAEDIT_BLENDER`); a 40 s
Short takes about 20 to 40 minutes on an Apple-silicon Mac.

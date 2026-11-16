---
user-invocable: false
name: megaedit-whatif
description: Write a Megaedit script.json in the What if style, a flat-vector 2D "what if you could..." story told to "you": a layered city, a round-headed hero with a power, the future as a see-through ghost copy, a counter that ticks up, and a question to end on
---

# What if

A second-person story: "You can see ten seconds into the future." It is fun for two beats, then the power costs you something, and the last card asks the viewer a question. Everything on screen is data in `script.json`, so any premise works: seeing ahead, hearing thoughts, pausing time, never forgetting a face.

## Shape (10 to 12 scenes, 40 to 60 s, about 3.3 words a second)
1. **Hook**: "You can ..." (the power, one sentence, eyes light up on the key word).
2. **How it feels**: one scene that shows the power working (a ghost copy of the world, a tag that names it).
3. **The fun**: a small win (a catch, a perfect line). One fact scene is allowed (a blueprint "scan" with two bars).
4. **The turn**: the power shows you something you cannot ignore. A number or a distance makes it real.
5. **You act**: the fix, and the moment it works. Bump the counter here.
6. **The catch**: nobody saw what you saw, so it looks wrong. Desaturate and blur the background.
7. **Quiet**: night, alone, one honest line about the cost.
8. **The twist**: one more thing the power shows. Warm light creeps in.
9. **Question** (`layout: "cta"`): lead-in, the big ask, "tell me in the comments".

Write the lines the way you would say them to a friend. One number a sentence.

## The bible (`extra.bible` on scene 1, once)
- `hero`: the cast id that is "you" (default: the first cast member). `looks`: `{ "<id>": { coat, pants, hair: bun|cap|hood, kid, scarf, eyes, rim } }`. A cast id with no look is drawn from its cast colours.
- `power`: `{ eyes: "#hex", ghost: "cyan|violet|mint|rose|#hex" }`: the colour of the hero's glowing eyes and of the see-through future.
- `counter`: `{ label: "SAVED" }` (up to 14 characters). Each `bump` cue adds one.
- `worlds`: your own places, `{ "<name>": { mood, type, sun, moon, stars, haze, far, mid, ground, shops, lamps, shelter, rain, room } }`. Skip it and use the built-ins.

## Places (`visual.setting`, or `shot.world`)
`dusk` (warm street), `day`, `night` (rain, bus shelter), `cafe` (a room with a window). Or a key you defined in `bible.worlds`.

## Shots (`extra.shots`, 1 to 8 per scene)
A scene is a few cuts. Each shot is `{ at, cam, to, push, shake, vcam, vto, world, look, actors, scan, chips, tint }`.
- `at`: where the cut lands (a cue). Leave it off on the first shot.
- `cam` `{x,y,z}` on a 1920 x 1080 sheet; `to` glides there over the shot; `push` is a slow zoom. `shake`: cues for a camera hit.
- `vcam` / `vto`: the camera for 9:16. A phone frame shows a 900-wide slice, so give it its own framing when the action is wide.
- `look`: `{ blur, sat, warm, rain, lamp }` (`warm` and `rain` can be tracks). `tint`: a colour laid over the shot (`rgba(255,140,90,.22)` warm dusk, `rgba(70,80,200,.28)` cold night).

### Cues and tracks
A **cue** is seconds from the start of the scene, or a spoken word: `"ten seconds"`, `"car#2"` (second match), `"car+0.3"`, `"car-0.1"`. Cut on a word and the picture lands on the voice. A **track** is a number, or `{ from, to, at, until | dur, ease }`, or a list of those. Eases: `inout` (default), `out`, `lin`, `quad` (a fall), `decel` (a car braking), `arc` (there and back, a toss).

### Actors (`shot.actors`, drawn in order)
- `person`: `{ look, x, y, h, pose, poses[{at,pose}], dir, vx, rate, eyes, reach, mouth|"talk", talk{at,until}, copy{lead,op}, ghost, front, d, blur, op, show{at,until}, fade }`. Poses: stand, walk, run, reach, shout, sit, pull, slump. `y` is the feet, `h` the height. `vx` makes a walker. `copy` draws a ghost `lead` seconds ahead of the person. `eyes` 0 to 1 lights the power.
- `car` `{ x, y, L, color, spin, skid }`, `ball` `{ x, y, r, spin, bounce }`, `cup` `{ x, y, rot, splash }`.
- `prop`: table, stool, shelter, streaks, glow.
- `front: true` draws it in front of the world with `d` depth (1.25 is near) and `blur`: a big out-of-focus hero is a good close-up.

### Blueprint scan (`shot.scan`)
`{ bg, grid{step,color}, finder, shapes[] }` with shapes `box`, `dot` (`flip`, `pulse`), `line`, `text`. Use it for the one beat that explains a number: two bars racing, a distance on a road from above.

### Tags (`shot.chips`)
`{ at, until, pos:[x,y], target:[x,y], vpos, vtarget, text, tone: cyan|red|amber, size }` with positions as a share of the frame. `"A · B"`: the part after the dot takes the tone colour. At most a few a shot.

## Other fields
- `extra.bump`: counter cues. `extra.askAt` on the cta: the word the big question lands on.
- `cta` layout: `subhead` = the lead-in, `headline` = the ask, `items[0]` = the footer.
- `sfxCues`: whoosh or swish for a cut, a soft thud for an impact, a click for the counter. No risers, no chimes.

Run `megaedit check` before rendering: it flags cues that are not in the line, bad shapes, a missing bible and a last scene that is not the question.

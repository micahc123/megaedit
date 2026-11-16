---
user-invocable: false
name: megaedit-lowpoly
description: Write a Megaedit script.json in the Low-poly style, a 3D "how you invented X" story Short: a caveman you and a tall friend in a low-poly valley, one prop that fixes a problem and breaks something new every beat, hard-cut cameras and two or three word captions, ending on the payoff. Use when the user wants an origin story of an everyday object (bucket, door, wheel, umbrella).
---

# Low-poly: how you invented X

Second person, one escalating chain. "You need water from the river, but it runs out between your fingers, so you scoop it up with a leaf. Except the leaf folds over, so you carve a log. Genius!" Every beat fixes the last problem and causes a new one, and the last line is the payoff: "Congratulations, you've invented the bucket!"

## Shape (6 to 9 scenes, 25 to 40 s, about 3.9 words a second, no pauses)
1. **Problem**: one sentence, then the first fix.
2. **Except / But**: the fix breaks something, so the next fix. Each scene is one problem and one fix.
3. After a good fix, one word from the friend: "Genius!" or "Clever!". The friend cheers on those and flaps on the bad bits.
4. Each fix is sillier and bigger than the last (a leaf, a log, a lid, a crane).
5. The last scene resolves the whole mess in one small object and says "Congratulations, you've invented ...".

Pick something everybody already owns, so nobody has to think. Write it the way you would tell it to a friend. One idea per sentence, and do not give any numbers.

## The bible (`extra.bible` on scene 1, once)
- `you`, `friend`: `{ tunic, hair, skin, beard?, band?, height?, width? }` (colours as `#rrggbb`). Defaults: a bearded caveman, a tall friend with a headband.
- `setting`: `valley` (green), `dry` (sand and clay), `snow`. `river`: `false` removes the river.
- `items`: your own props, `{ "<id>": { parts: [{ g, c, p, s, r }] } }`. Shapes `g`: box, cyl, cyl-tap, cone, cone8, sph, ico, torus, ring, caps, plane. Colour `c`: a material (wood, bark, inner, lid, band, rope, rock, leaf, metal, water, mud, dark, thatch, wall) or `#rrggbb`. `p` position, `s` scale, `r` rotation in radians, all around (0,0,0), in metres.
- Built-in items (no bible entry needed): leaf, log, log-thin, log-lid, log-hole, log-handle, crane, bucket, stone, stick, plank, sack, bowl, rope-loop.

## Scenes (`extra`, every scene)
World units are metres: ground y 0, the river runs along z at x 8, you stand near x 2.4, z 0.3 and the camera sits at positive z looking toward negative z.
- `shots` (1 to 8): `{ at, from, to, look, lookTo, fov, blur }`. The camera glides from `from` to `to` while looking from `look` to `lookTo`. `at` is the cut (a cue); leave it off on the first. A new cut about every 3 seconds, always a push-in or a pull-out. `blur` (3) on close shots blurs the far background.
- `actors` (you, friend): `{ who, x, z, face, pose, walk, lean, hide }`. `x`, `z`, `face` are tracks. `face` 1.57 looks at the river, 0 looks at the camera, -1.57 looks away from it. `pose` is a name or a list `[{ pose, at }]`: idle, cup, dip, flourish, strain, hold, carry, point, build, grin, cheer, wave, nod, shrug. `walk: { at, until }` swings the legs.
- `props`: `{ item, pos, at, until, scale, stretch, rot, spin, attach, pop, wobble, bob }`. `pos` is a point, a move `{ from, to, at, dur|until, ease }`, or a list of moves. `attach: "you"` makes `pos` an offset from your feet (a bucket in your hands is about `[0.62, 0.55, 0]`). A prop pops in with a little overshoot at its `at`; `pop: false` skips it. To change an item (log to lidded log), end one prop at a cue and start the next at the same cue.
- `drops`: `{ at, until, from, attach, rate, v, spread }`: a stream of water drops.
- `gloom`: a track 0..1 that darkens the light for the beat where it all goes wrong.

### Cues and tracks
A **cue** is seconds from the start of the scene, or a spoken word: `"scoop"`, `"log#2"` (second match), `"log+0.3"`, `"log-0.1"`. Cut on a word and the picture lands on the voice. A **track** is a number, or `{ from, to, at, until|dur, ease }`, or a list of those (each holds its end until the next begins). Ease: inout, out, lin, quad, decel, arc.

## Rules that make it look right
- One hold on the same picture never lasts past 4 seconds.
- Use `hold: -0.3` on every scene but the last so the voice runs on with no gaps.
- Captions are made for you (2 to 3 words, middle of the picture). Sound is the voice only, plus quiet clicks and thuds. No music, no risers.
- Render 9:16. The CLI renders WebGL styles with the GPU flags on its own.

Run `megaedit check` first: it flags unknown items, cues that are not in the line, bad shapes, and a last line that is not the payoff.

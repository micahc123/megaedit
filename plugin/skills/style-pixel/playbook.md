# Pixel playbook

## Look
Chunky 16-bit pixel art, drawn in code. One art pixel is 6 layout units, the same size in every aspect ratio. Everything is crisp rectangles; nothing is anti-aliased or blurred. A faint scanline texture sits over the whole frame.

## Palette
Dark windows (deep indigo `#1d1a2e` family) with a cream border and one warm accent for the speaker tag and cursor. Settings use small, flat colour sets: sky blues for town and forest, purple for arcade and bedroom, near-black for dungeon and space. Floors are two-tone checkers with a lit top edge. Props are posterised to a few steps so they read as sprites.

## Type
Press Start 2P everywhere, capitals for headlines. Body text in windows is smaller, widely spaced, and types out at the speaking pace. Never mix in a second face.

## Motion
Stepped, not smooth. Sprite idle and talk frames change at about 5 fps. Entrances pop in with a one or two step bounce. The camera moves in whole-pixel jumps and only a few times a scene. Twinkling stars, torch flames and window lights flicker on the same 4 to 5 step clock.

## Camera
Mostly locked. A push-in or pan is allowed but it must quantise to the pixel grid. No rotation.

## Characters
Sprites come from the cast spec: body type sets the silhouette, skin, hair, eyes and outfit set the colours, accessory adds a hat or glasses. A 1 pixel ink outline keeps them readable on any tile. A talking sprite opens its mouth every other step.

## Sound
Short square-wave blips for each typed letter or a menu move, a soft coin or confirm sound on reveal and big numbers. A low chiptune bed at about -22 LUFS under the voice. No risers, no whistles, no high held tones.

## Hooks
- A game-world question in the first 3 seconds: "Ever wonder how a game remembers where you stopped?"
- A menu that shows the answer's shape (three items) before the voice explains it.
- Open on a sprite mid-reaction, not a title card.
- End on a choice or a comment ask that fits a game ("Which game would you never risk?").

## Hard rules
Original sprites and names only. No other game's characters, items or music. Numbers rounded, no income claims, at most 5 hashtags.

## Micro-story mode: playbook
Reference: the "Pixel Art #Shorts" micro-stories (13 to 19 s, 28 to 40 beats at about 128 bpm). Measured: median shot 0.93 s,
about 14 shots, the camera moving 80 % of the time (push-in, pull-out, tilt), no text in the picture, no voice, one small
fixed palette (about 20 flat colours per frame), 1-px dark outlines, ordered-dither light and shadow, 6 px art pixels at 1080.

### Script template
```
Title: The <small thing> Nobody <verb>s            (the hook; never drawn on screen)
1  WIDE 4 beats   The room, the thing in its place. It is a little forgotten. Quiet start, camera creeps in.
2  CLOSE 2        Its face: a small sadness. One expression only.
3  TRIGGER 2      The world changes: weather, a sound, a door, a shadow.
4  CLOSE 2        It notices. Hope (eyes up, a sparkle).
5  ACTION 2       Someone or something reaches for it.
6  TURN 2         It is picked up / used / switched on. The first real motion.
7  MOVE 2-4       It does its job in a new place. Camera follows. Weather, puddles, sparkles.
8  PAYOFF 2       A friend, a hug, a hearts burst. Joy face.
9  CLOSE 2-4      The smile held a beat longer than expected.
10 PULL-OUT 4     Back to the room; the moment is over.
11 WIDE 4         The opening picture again. Same set, time, props, camera. One pixel differs: it is ready to be forgotten again.
```
Every shot is whole beats; the total is 32 beats (15.0 s). Cuts on the bar line for scene changes, on the half bar for reactions.
Nothing on screen reads as text. The closing wide is the opening wide, so replaying it never shows a seam.

### 10 original ideas ("the X nobody Y")
1. **The Umbrella Nobody Borrows.** (built: `example-micro`) A yellow umbrella by the door, passed over for the sun hat. Rain. A kid grabs it. It opens for the first time. A smaller friend ducks under it. Back in the stand, still smiling.
2. **The Night Light Nobody Thanks.** (built: `example-micro-2`) It glows through a storm, the kid calms down, morning comes and a hand switches it off. It smiles anyway, and glows again at dusk.
3. **The Sock Nobody Matches.** One orange sock in a drawer of pairs. A laundry basket tumbles. It finds its twin behind the radiator. Both on one pair of feet.
4. **The Last Cookie Nobody Takes.** A single cookie on a plate at the end of a party, everyone offers it to someone else. The dog is the only one who says yes. The plate is clean; the dog winks.
5. **The Spare Key Nobody Remembers.** A key under the plant pot. The door is locked, rain, a tired parent walks past it twice, then lifts the pot. The door opens, a light turns on.
6. **The Window Seat Nobody Sits In.** A cushion in a bay window. A cat tries the other chairs and ends up in it. Sun moves across the floor; both of them move with it.
7. **The Mug Nobody Washes.** A tiny blue mug at the back of the sink. Everyone washes the big ones. The kid does it by hand, one bubble at a time. It shines and goes on the top shelf.
8. **The Bottom Bunk Nobody Wants.** A lower bunk with a nightlight and a stuffed bear. A new kid arrives, picks the top, hears thunder, climbs down. Two sleepers.
9. **The Last Crayon Nobody Picks.** (a new colour, not the ref's: a grey crayon) Everyone draws the sun with yellow. A storm cloud needs grey. The grey crayon gets used; the page is finished.
10. **The Bench Nobody Sits On.** A tiny bench at a bus stop in the rain. Everyone stands. A tired person finally sits; a stray dog joins; a bus passes and neither of them takes it.

### Pixel rules for micro
Light is a dithered pool (gold on the wall), not a gradient. Shadows are dithered checkers under the object. Storm is a muted palette, not black.
Eyes are 2-4 px, the mouth 1-2 px; use `face` changes instead of moving parts. A close-up uses zoom 2 to 3.4 and keeps the same pixel grain.

### Sound for micro
Chiptune bed in code: low soft leads (plucked triangle, under about 520 Hz), a 25 % pulse and triangle bass that bounces on root and octave, a quiet kick on beats 1 and 3, a brushed noise snare on 2 and 4, tiny hats, a quiet 12.5 % pulse arp in the fourth octave, one-pole low-passed. Never a held high square lead; it must pass `whistle.py --strict`. The loop tail wraps into the head so the replay is seamless.

# Low-poly playbook

## Look
A PlayStation 1 game, rendered for real. A cross-section of one building: rooms are 7 x 6 x 3 m and stacked (lab over office over break room over lobby), with real furniture (vending machine, cooler, filing cabinets, reception desk, lab bench). Four rigged low-poly people with swappable faces (grin, strain, shock, scream), animated by motion-generated clips. Blender renders at 360 x 640 with PS1 vertex snapping and affine texture warp, then a grade (bloom, lift, saturation, vignette), a 4 x 4 Bayer dither to 5 bits and a nearest x3 upscale to 1080 x 1920.

## Camera
Always alive: a slow dolly plus a little handheld on every shot. Wide corners cycle per room, close-ups have f/2 depth of field and follow the head, inserts go to the object, and the cut-away shows the whole building. Light shifts a little on every cut (flat, cold, bright, warm) so cuts read.

## Captions
Yellow Archivo Black, two or three words at a time, at 69 % of the height, black outline. Price tags are white paper tags with red text that pop in with a sound.

## Voice and sound
One narrator (ElevenLabs, speed 1.05 to 1.12, about 3 words a second). Sound effects are synthesised in code and placed on the picture (thud, punch, glass, gasp, whoosh, pop on every tag). No music bed. The voice is mixed to -14 LUFS.

## Beats
Hook (calm, a small thing goes wrong) -> three escalating rooms, each with a bigger number on a price tag -> the turn (the thing was there all along) -> the community line over a pull-back to the whole building.

## Cost and gotchas
- About 12 minutes of mini time for a 40 s Short. Do the `still` sheet first (2 minutes).
- Heads cut off or a blue blur means the camera is inside a body: pick a different `rel`/`bone`, or a `wide`.
- A verb the clip does not have (or a face the body lacks) fails at `check`, not at render.

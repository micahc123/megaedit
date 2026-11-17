# Cartoon 3D playbook (lit)

## Look
Flat 2D stick-cartoon characters (big round cream head, pill body, thin dark limbs, ink outline) stand in a real 3D world with **no ink on the world**: procedural PBR walls, floors and props, real point, spot and sun lights with soft shadows, a pool of light under the cast, haze, contact AO (N8AO), a thin-lens blur whose focus follows the subject, and a filmic grade (extended Reinhard, contrast, saturation, vignette, grain). Bloom is HDR-thresholded so only light sources glow. This is the "Ricks-style" look measured from the reference short; see NOTES in the plugin repo for the port.

## Camera
Keyed on every shot (framing preset + move + optional punch-ins), hard cuts between shots, a slow sideways drift and a hand-held wobble on top. A shot starts on a spoken word. Punch-ins are 3 frames. Shake and flash on impacts.

## Places
4 to 6 per minute. Interiors have light from a lamp, fire or a window shaft; exteriors have a sun, dusk or dawn sky, a moon at night.

## Light and grade
The mood decides the light and grade. Use a shot `grade` for the turn of the story only (`cold`, `sick`, `dream`, `blood`, `dark`).

## Characters
Face by name, action by name; blinks every 40 to 90 frames, the mouth flaps while the scene's speaker talks, idle sway on everyone (`bible.act`). Walks move the character between two floor points.

## Effects
Atmosphere per shot (`fx`): dust, embers, smoke, sparks, rain, snow, fireflies, steam, leaves. Impacts use `shake` + `flash` + `sparks`.

## Captions
Archivo Black style, sentence case, one to three words, big and low on the frame, hard swaps on the spoken words. Use the `story` caption style.

## Sound
Voice up front, short dry foley on actions, no ambience bed, no risers or whistles.

## Fallback
Scenes without `extra.lit` still render through the older ink-world drawer so old projects keep working.

## Script formula
Person plus problem in the first sentence, three failed tries, the turn, the payoff, one dry last line. 160 to 200 words.

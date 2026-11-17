---
user-invocable: false
name: make-style
description: Create a member's own Megaedit style — palette, fonts, caption look, backgrounds, camera habits, pacing and a playbook — built on one of the seven engine styles. Use for "make my own style", "a new look for my channel", or after clone-style.
---

# Making a custom style

Custom styles live in the member's library as `custom:<slug>` and are built on a base
engine style from the lineup that Megaedit draws itself (whatif, pixel, cartoon3d, vox, fern, kurzgesagt, or a series: roadto, team, dayn; the Blender styles roblox, zackd and lowpoly can't be a base). Use
`cli` with `["styles", "new", "<slug>", "--base", "<style>"]` to scaffold one.
That creates `~/Megaedit/library/styles/<slug>/` with:

- `style.json`: base, palette (bg, paper, ink, muted, accent, plus 3–5 rotation colours), fonts (display + body, from the bundled font list), caption style id, default camera and transition, pace (words per second), allowed settings.
- `playbook.md`: how to write for this style. The beat shape, hook rules, which layouts to use for what, and 3 example scenes.

## Choosing well
- **Palette**: 4–6 colours that sit together, saturation under ~75%, tinted grounds rather than pure black or white, one accent that does the pointing. No neon unless the member asks for it by name.
- **Fonts**: one display face, one body face. Don't pair a sans with a random italic serif.
- **Pace**: explainers 3.6–4.2 words a second, comedy 4–4.5, story series 3.2–3.5 with pauses.
- **Camera**: pick two habits (e.g. slow push-ins + whips on beats) rather than all of them.

Then make a 3-scene test project in the new style, `look` at every scene, adjust, and show the member.

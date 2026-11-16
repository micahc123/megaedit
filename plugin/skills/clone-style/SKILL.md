---
user-invocable: false
name: clone-style
description: Turn a reference reel the member has the right to study into a Megaedit style bible — measured cuts, camera, colour grade, pacing, captions and words per second — and then into an original style. Use when the member pastes a video file or says "make it look like this", "clone this style".
---

# Cloning a style (the look, never the content)

1. Run the `cli` tool with `["clone", "<video file>"]`. It measures every frame: cut times, average shot length, camera moves, the colour grade (palette, contrast, saturation), caption position/size/case, music vs speech, and words per second from a transcript. It saves `BIBLE.md`, `measurements.json` and `contact-sheet.png` into the custom styles folder (`megaedit styles` lists it as `custom:<slug>`).
2. Read the bible and the contact sheet it made. Check the numbers against what you see; fix anything the measurements got wrong in the bible.
3. **What can be copied**: pacing, shot lengths, camera grammar, caption placement, the kind of palette, the beat shape of the script.
   **What can't**: their characters, mascots, names, logos, music, voice, catchphrases, exact jokes or story. Our version must look like a cousin, not a copy.
4. Turn it into a style with the `make-style` skill: pick the closest built-in style as a base, then set palette, fonts, caption style, camera and pacing from the bible.
5. Make one short test episode, `look` at it next to the reference contact sheet, and list the three biggest differences. Fix those, then hand it to the member.

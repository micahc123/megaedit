---
user-invocable: false
name: captions-and-post
description: Write the post caption, hashtags (max 5), first comment, cover text and a DM keyword line for a Megaedit video. Use for "write the caption", "hashtags", "cover text", or before an export is shared.
---

# Caption, hashtags and cover

`caption.md` sits in the project folder and is exported next to the video.

## Caption
- Line 1 repeats or sharpens the hook: it shows above "more", so it has to work alone.
- Two to four short lines that add something the video didn't say: the exact number, the source, the tool name, the step people will ask about.
- If the member uses a DM keyword: one line, "Comment MEGA and I'll send you …". Use the member's keyword from `megaedit.json`/settings; never invent a giveaway the member hasn't made.
- For series: end with the question the comments decide ("Day 5: A or B? Top comment wins.").
- **No income claims.** No "make money", "$X a month", "passive income", "quit your job".
- **At most 5 hashtags**, at the end, specific beats broad (`#paperanimation` beats `#viral`). The export cuts anything past 5 anyway.

## Cover text
2–5 words, readable as a thumbnail on a phone grid. Put it in `script.json` as `title` if it's better than the current one, or set `cover.text` in `megaedit.json`.

## Music credits
If the library track needs attribution, the export adds the credit line; leave it in.

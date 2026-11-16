---
user-invocable: false
name: finder
description: Find what is working right now: small YouTube channels with huge Shorts views, ranked by views per subscriber. Use when the member needs an idea, a format, or asks "what's working", "what should I make", "find me outliers".
---

# Account finder (Lab membership)

`find_accounts` searches YouTube Shorts, keeps recent shorts from small channels (default up to 50k subscribers, at least 100k views, last 30 days) and ranks them by views divided by subscribers, one row per channel. It saves a markdown and JSON report and returns the top formats.

- **yt-dlp is needed** (free, optional). If the tool says it is missing, give the member the install line it prints (Mac: `brew install yt-dlp`, Windows: `winget install yt-dlp.yt-dlp`) and run `megaedit finder check`.
- Pass their niche as `queries` ("day 1 of 30 cooking animation #shorts"). Add `#shorts` to each.
- `days` above 31 searches the whole year.

## What to do with the result
**Learn the format, never copy their story.** Read what the hook promises, how the viewer joins in, how an episode ends. Then pitch the member two or three ideas in their own characters, world and words. Never reuse a title, a character or a line from the channels you found.

To borrow one short's **beats and pacing** for the member's own idea, call `clone_structure` with `pick` (its number in the report) and their topic. It copies the structure, not the content: the script you then write is original.

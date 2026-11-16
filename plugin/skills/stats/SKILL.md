---
user-invocable: false
name: stats
description: Read live views, likes, comments and the top comment from the member's connected accounts, and use the top comment to decide the next episode. Use when they ask how a reel did, "what did the comments say", "what should happen next", or before writing a series episode.
---

# Live stats and the top comment (Lab membership)

No CSV needed once an account is connected (see guide "post").

- `stats` pulls followers, views, likes and comments per recent post and the top comments on the latest one. Pass `series` for one account. Instagram and YouTube give comment text; TikTok gives counts only. Results are saved, so `analytics suggest` learns from them too.
- `top_comment` reads the newest post of a series, skips the member's own comments and spam, and saves the winner as the **decision** for the next episode. `series_brief` and routines then include it, so the next episode must follow it. Give `options` (for example `["1","2"]`) when the post asked for a vote.
- No connected account? Fall back to the CSV: the member exports comments, then `cli` with `["comments","pick","comments.csv","--series","<id>"]`.

## Before every series episode
1. `top_comment` for the series. 2. `series_brief`. 3. Write the episode so the decision is the turning point.

Report numbers as they are. If a number is missing (`null`), say it is not available, never fill it in.

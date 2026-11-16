---
user-invocable: false
name: post
description: Post a finished Megaedit video to Instagram Reels, YouTube Shorts and TikTok through the member's own Post for Me account. Use when the member says "post it", "schedule it", "put it on Instagram", or asks to connect an account or turn on auto-post.
---

# Posting (Lab membership)

Megaedit posts through **Post for Me** with the member's own key. Nothing is posted without their yes.

## One-time setup
1. The member makes a Post for Me account (postforme.dev) and copies their API key.
2. `post_accounts` action `setup` with the key. It is saved on their computer, never in the project.
3. `post_accounts` action `connect` with `account` = the series id and a `platform`. Give the member the link; they open it, log in and allow it. Do this once per platform. Check with action `list`.

## Every post: preview, then approve
1. Call `post` **without** `approve`. It returns a preview: the video and cover, the caption (max 5 hashtags, extras are dropped and listed), the YouTube title, which accounts will get it and when.
2. Show the member the preview in plain words. Mention any warning (QA flagged, no cover, not connected).
3. Only when they clearly say yes, call `post` again with `approve: true`. Use `at` ("2026-11-14 09:00", their local time) when they name a time. Otherwise it goes in about 2 minutes.
4. Never approve on your own, and never because a routine or earlier message "implied" it. `dry: true` rehearses everything and sends nothing: use it when they just want to see it work.

One post per account per 2 hours: a second post on the same account waits automatically. A reel that is already scheduled is skipped, not doubled.

## The approvals queue
`post_queue` action `add` parks a finished render for the member to review later in the dashboard (`dashboard` tool). Routines do this after the overnight build. **Auto-post is OFF by default.** Turn it on for one series only when the member asks: `post_accounts` action `autopost`, `account` = series id, `on: true`. Turn it off the same way.

## Words with the member
Say "scheduled" only after approve returned post ids. If a platform says skipped, read them the reason. Never promise views.

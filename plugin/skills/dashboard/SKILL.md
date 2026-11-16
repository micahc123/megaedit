---
user-invocable: false
name: dashboard
description: Open the Megaedit dashboard to review reels, approve posts, see accounts, the calendar, routines and the finder. Use when the member wants to review what is waiting, check how accounts are doing, or says "open the dashboard".
---

# Dashboard (Lab membership)

The `dashboard` tool (or `megaedit dashboard` in a terminal) opens a page on this computer only (127.0.0.1, no cloud). It works the same on Mac and Windows.

- **Accounts**: followers and views per episode, from the last stats pull (Refresh pulls again).
- **Calendar**: scheduled and posted reels by day, one row per account.
- **Approvals**: renders waiting for a yes. Play it, edit the caption, then Approve & post, Schedule or Reject. This is where overnight episodes land. Nothing posts until the member clicks.
- **Routines**: next run, last run and how it went.
- **Finder**: run the account finder and read the report.

Open it for the member instead of describing it. `dry: true` makes Approve rehearse without sending.

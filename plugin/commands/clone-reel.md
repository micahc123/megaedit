---
description: "Copy a reel's structure (not its content) for an original video on your topic"
argument-hint: "<reel link> <your topic>"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Copy the STRUCTURE of a reel for an original video: $ARGUMENTS

Split the arguments into the link and the member's own topic (ask for the topic if it is missing). Call `clone_structure`. Read structure.md and tell the member in two lines what was measured. Then write an original script with guide "write" following the scene plan; never reuse the reference's words, characters, jokes or art. `check`, `look` at s01.

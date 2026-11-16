---
description: "Learn a new style from a reference video you are allowed to use"
argument-hint: "<video file> [style name]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Make an original Megaedit style from this reference: $ARGUMENTS

Use the `style-cloner` agent (guides "clone-style" and "make-style"). Copy pacing, camera grammar, caption placement and palette mood; never characters, names, logos, music, voice or jokes. Then make a 3-scene test in the new style and show the stills.

# zackd playbook (Zack D-style 3D)

1. **Topic**: one everyday body moment the viewer has felt (blushing, crusty eyes, hiccups, goosebumps, a dead arm). Ask: what is physically happening, in three steps?
2. **Script** (90-125 words, 8-11 scenes): you-hook, "this is what it actually is", three mechanism beats, the "But" turn, the payoff on the person.
3. **World**: write `zackd.json` (`room`, one cast member with `eyes`).
4. **Shots**: 2 per scene on average. Person shots push in close; mechanism lines dive into a macro world; one x-ray on the word that names the inside part.
5. `megaedit check` → `megaedit voice` → `megaedit still --scene sNN` for every scene with a macro or x-ray shot. Look at every still: the subject is sharp, the cyan void reads, the face is lit.
6. `megaedit render` (Blender). Then `megaedit qa`.

Gotchas
- `at` must quote words that are really in the scene text, in order.
- Macro shots need `count` ≥ 40 or the void looks empty; vary `seed` and `az` between two macro shots of the same world.
- `fx` `t0` is seconds into the shot, not into the scene.

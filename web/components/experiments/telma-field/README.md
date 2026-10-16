# Telma conversation field (local experiment)

A typographic sculpture for the hero: a sheet of Portuguese characters in
perspective, moving on coherent noise, brightening near the cursor and rippling
on click or tap. Plain WebGL2, no dependencies.

- `engine.ts`: the WebGL renderer (glyph atlas, point sprites, shaders, input).
- `noise.ts`: simplex noise, shared by the shader and the CPU click picking.
- `TelmaConversationField.tsx`: the React wrapper.
- `HeroFieldExperiment.tsx`: the dark hero used to see it in context.

## Turn it off / revert

Quick: set `HERO_FIELD_EXPERIMENT = false` in `HeroFieldExperiment.tsx`.

Fully:

```sh
git checkout web/components/sections/Hero.tsx
rm -r web/components/experiments/telma-field
```

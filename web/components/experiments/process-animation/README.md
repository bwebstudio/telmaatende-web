# Process animation (local experiment)

One continuous scene: a call arrives, Telma answers, the facts surface, the
camera pulls back to the system around the call, pushes in on the entry, and
the entry settles into the agenda as "Por confirmar". 19 s loop.

- `timeline.ts`: keyframe tracks, cubic-bezier easing, sampling.
- `choreography.ts`: every element's keys (desktop and phone variants).
- `TelmaProcessAnimation.tsx`: the stage and its pieces, driven by one rAF clock.
- `ProcessAnimationSection.tsx`: the section wrapper used on the home page.

No dependencies. The agenda reuses the dashboard's day-list language
(`dashboard/components/clinic/AgendaDay.tsx`) and its pending tone.

## Turn it off / revert

Quick: set `PROCESS_ANIMATION_EXPERIMENT = false` in `ProcessAnimationSection.tsx`.

Fully: remove the two marked lines in `app/[lang]/page.tsx` and
`rm -r web/components/experiments/process-animation`.

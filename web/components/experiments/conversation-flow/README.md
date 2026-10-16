# Conversation flow (local experiment)

A current of small facts drifting right to left behind one card that shows what
Telma understood from a call. DOM + CSS transforms driven by one
requestAnimationFrame loop; no dependencies.

- `TelmaConversationFlow.tsx`: the scene (current + card).
- `ConversationFlowSection.tsx`: the section wrapper used on the home page.

## Turn it off / revert

Quick: set `CONVERSATION_FLOW_EXPERIMENT = false` in `ConversationFlowSection.tsx`.

Fully:

```sh
git checkout "web/app/[lang]/page.tsx"
rm -r web/components/experiments/conversation-flow
```

# 12. Hooks

**Course:** [Claude Code 101](./index.md)

## Notes

- Hooks are shell scripts that run **outside** the Claude Code agent loop
- They execute deterministically in response to events (e.g. before/after a tool call, on session start)
- Common uses: linting, auto-formatting, logging, running tests after code edits
- Configured in your Claude Code settings file
- Unlike agents and skills, hooks cannot be interrupted — they always run

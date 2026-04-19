# 6. Context Management

**Course:** [Claude Code 101](./index.md)
**Screenshot:** [image-6.png](../../screenshots/2-claude-code-101/image-6.png)

## Notes

**Context Management**
Context management in Claude Code means managing what Claude is holding in its working memory — what it was working on, what files it has access to, and more.

**What Happens When Context Fills Up**
When context reaches the limit, the current context window will automatically compact — this compresses the session so that Claude can continue working. You can also manually compact using `/compact`.

**Commands**
- `/compact` — compress the current context when it's running low
- Exit and restart for a completely fresh context

**When to Use `/clear`**
1. Use it when starting an unrelated task
2. Build on prior context when the task is small enough that the prior context is still helpful
3. Use it when running into strange behavior — clearing the context can resolve unexpected results

**Tips for Saving Context Space**
- Be specific — the more specific you are in a task, the less Claude Code will try to do, the less context you'll use up
- Keep CLAUDE.md concise and accurate so Claude has the most relevant information on hand without wasting context

**Recap:** Managing context within Claude Code is one of the best ways to stay productive. Use subagents to delegate heavy lifting, run `/compact` regularly, and keep CLAUDE.md concise and accurate.

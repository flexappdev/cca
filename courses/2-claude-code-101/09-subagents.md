# 9. Subagents

**Course:** [Claude Code 101](./index.md)
**Screenshot:** [image-9.png](../../screenshots/2-claude-code-101/image-9.png)

## Notes

**Subagents**
Claude can delegate tasks to subagents that break them down and run component tasks in parallel, improving your context management. Each subagent operates in its own isolated context window.

**How It Works**
A subagent runs in parallel with its own context window, handles exploration or heavy lifting, and once finished, summarizes its findings and returns that summary back to Claude. The result: you get the answer you were looking for, without the entire journey cluttering your main context.

**Creating Your Own Subagent**
Subagents are defined in Markdown files with YAML frontmatter. Run:

```
/agents
```

Then select "Create new agent." You'll walk through steps including choosing the scope, defining its purpose, selecting the tools it has access to, and picking a color. You also define when Claude should call the subagent automatically based on your prompts.

**Further Customization**
- **Persistent memory** — lets your subagent retain memory across conversations
- **Preload skills into subagents** — add the `skill` key and list skills by name. Note that unlike skills in your main conversation, the entire skill is loaded into context

**Recap:** With subagents, you can run an agent in the background to handle heavy lifting and return just the answer to your main context window. See also: Introduction to Subagents course.

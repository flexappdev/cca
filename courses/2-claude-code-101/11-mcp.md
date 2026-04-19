# 11. MCP (Model Context Protocol)

**Course:** [Claude Code 101](./index.md)
**Screenshot:** [image-11.png](../../screenshots/2-claude-code-101/image-11.png)

## Notes

**MCP (Model Context Protocol)**
MCP is an open standard that Anthropic built so Claude Code can connect to external services and data sources. It lets you connect one or more "tools" to Claude so that it has access to more data and more actions than it would have out of the box.

**What Can You Do With It?**
- Querying a database
- Posting to Slack
- Managing GitHub issues
- Reading from a CRM
- Accessing file systems outside your project

**Adding an MCP Server**
Two main ways:
1. **Remote MCP servers** — available from the internet; you connect Claude Code to the server's URL
2. **Local** — the server runs on your machine

Manage your servers using the `/mcp` command in Claude Code.

**Scoping Servers**
- **Global** — available across all projects
- **Local** — available only in the current project

**Context Costs**
MCP tool definitions add tokens to every message. If you have many MCP servers configured (30+), Claude Code becomes less efficient because the context fills up with tool definitions before any actual work happens. Scope servers carefully and keep the total number manageable.

**Recap:** MCP connects Claude Code to data and services. Add MCP servers thoughtfully — scope them correctly and keep the total number manageable.

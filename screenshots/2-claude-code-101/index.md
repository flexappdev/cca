# Claude Code 101

## All courses (ranked)

1. [Claude 101](../1-claude-101/)
2. [Claude Code 101](../2-claude-code-101/)
3. [Introduction to Claude Cowork](../3-introduction-to-claude-cowork/)
4. [Claude Code in Action](../4-claude-code-in-action/)
5. [AI Fluency: Framework & Foundations](../5-ai-fluency-framework-foundations/)
6. [Building with the Claude API](../6-building-with-the-claude-api/)
7. [Introduction to Model Context Protocol](../7-introduction-to-model-context-protocol/)
8. [AI Fluency for educators](../8-ai-fluency-for-educators/)
9. [AI Fluency for students](../9-ai-fluency-for-students/)
10. [Model Context Protocol: Advanced Topics](../10-model-context-protocol-advanced-topics/)
11. [Claude with Amazon Bedrock](../11-claude-with-amazon-bedrock/)
12. [Claude with Google Cloud's Vertex AI](../12-claude-with-google-clouds-vertex-ai/)
13. [Teaching AI Fluency](../13-teaching-ai-fluency/)
14. [AI Fluency for nonprofits](../14-ai-fluency-for-nonprofits/)
15. [Introduction to agent skills](../15-introduction-to-agent-skills/)
16. [Introduction to subagents](../16-introduction-to-subagents/)
17. [AI Capabilities and Limitations](../17-ai-capabilities-and-limitations/)

## Course overview topics

**Section: What is Claude Code?**
1. What is Claude Code?
2. How Claude Code works

**Section: Your first prompt**
3. Installing Claude Code
4. Your first prompt

**Section: Daily workflows**
5. The explore → plan → code → commit workflow
6. Context management
7. Code review

**Section: Customizing Claude Code**
8. The CLAUDE.md file
9. Subagents
10. Skills
11. MCP
12. Hooks

**Section: Quiz**
13. Course quiz

## Course overview

![Claude Code 101 course overview](image.png)

---

## 1. What is Claude Code?

![What is Claude Code?](image-1.png)

**What is Claude Code?**
Claude Code is an agentic coding tool that understands your codebase, edits your files, runs commands, and integrates with your existing developer tools to help you get things done faster. It is available in your terminal, Visual Studio Code, the Claude Desktop app, on the web, and in JetBrains IDEs.

**What Separates Claude Code from Claude?**
Unlike Claude.ai, Claude Code doesn't copy and paste code back and forth — it goes in and does the work itself. The key differentiator is that Claude Code works as an AI Agent.

**What is an Agent?**
An AI Agent is software that can interact with its environment and perform actions to complete a defined goal. At its core, this works by having a large language model operating in a loop in real time. AI Agents can have access to tools, external services, or even other AI Agents to help reach their goals.

**What Can Claude Code Actually Do?**
- Read and understand your codebase — explain a feature or trace a bug throughout your code
- Edit files across your project
- Run terminal commands — execute your build script, run tests, install packages, and use the output to decide what to do next
- Search the web — look up documentation or the latest API references

**Using Claude Code Effectively — three concepts to keep in mind:**
- **The context window** — Claude's working memory. It can hold a lot but not everything at once. Claude finds strategic ways to locate answers within your codebase without loading the entire thing.
- **It asks for permission** — by default, Claude will ask before running commands or making changes. You're always in control.
- **It can make mistakes** — staying in the loop helps you catch errors early.

**Recap:** Claude Code is an agentic coding tool. It reads your codebase, edits your files, runs commands, and connects to external tools to help you ship faster.

---

## 2. How Claude Code works

![How Claude Code Works](image-2.png)

**The Agentic Loop**
Claude Code is best understood through its agentic loop:
1. You enter a prompt into Claude Code
2. Claude gathers the context it needs by interacting with the model, which returns text or a tool call
3. It takes action (e.g. editing a file)
4. It verifies whether the action achieved what your prompt set out to do
5. If yes, Claude finishes and waits for the next prompt. If not, it loops back and tries again until the results are complete and verifiable

**Context**
Claude has a context window that determines how much of your conversation, file contents, command outputs, and more it can store and reference. Once you reach the limit, Claude Code compacts your conversation — automatically determining what it can remove or summarize to bring the context within limits.

**Tools**
Tools are the backbone of how agents work. Most AI assistants simply take text in and return text out. Tools let Claude Code determine *when* to execute code to get closer to completing a task — file-reading tools, web search tools, or any number of other capabilities. Claude Code uses semantic understanding to determine when to call a tool and how to use the output.

**Permissions**
Claude Code has several permission modes:
- **Default behavior** — Claude asks for explicit permission before editing a file or running a shell command
- **Auto-accept** — files are edited without asking, but commands still require approval
- **Plan mode** — uses read-only tools to compile a plan of action before starting any work

**Recap:** Claude Code combines several agentic concepts: an agentic loop, a managed context window, tools, and configurable permissions — all inside your terminal. That's what makes it fundamentally different from a chat window.

---

## 3. Installing Claude Code

![Installing Claude Code](image-3.png)

**Installing Claude Code**
Claude Code is simple to install whether you're on the web, in your terminal, or on the desktop.

**Terminal**
Install via npm/Node.js or WSL — the first command to run in your project directory. After installation, you should be able to type `claude` and open your project with `claude` in the directory.

**Visual Studio Code**
Install from the VS Code extension marketplace by searching for "Claude Code". After installation, you may sign in from the bottom left. The extension gives you the same terminal experience with added UI integration.

**Desktop**
After installing and opening the Claude Desktop app, you will find the top row includes all the top navigation items. Works with specific folders on your machine.

**Web**
You can also access Claude Code by going to claude.ai from any browser. This includes a similar interface to the desktop app.

**Which One Should You Use?**
- If you're on the cutting edge, the terminal is the most powerful
- Terminal or VS Code extension is recommended for most developers
- Claude Code on the web is a solid choice if you prefer a browser-based experience
- All three are kept up to date; the right answer is whichever you're most likely to use

---

## 4. Your first prompt

![Your First Prompt](image-4.png)

**Your First Prompt**
You talk to Claude Code like you would any AI assistant. When entering your prompt, here are some things to consider that can both protect you and make things easier.

**Auto-Accept vs. Approval**
You can choose whether Claude auto-accepts every file change it suggests, or whether it asks for your explicit permission each time. Press `Shift + Tab` to cycle between modes:
- **Approval mode** — Claude asks permission each time it wants to edit a file
- **Auto-accept mode** — file edits are automatically approved, but commands still require your permission

There's no right or wrong answer — it's whatever you're comfortable with.

**Plan Mode**
Within the `Shift + Tab` menu is Plan Mode. Plan mode takes your prompt and uses read-only tools to analyze your codebase and research your suggested implementation. It will ask clarifying questions along the way, then return a detailed plan it can execute. Plan mode is great for planning complex changes or doing a safe code review.

**Example: Add a Dark Mode Toggle**
1. Open the root directory of your project and run `claude`
2. Press `Shift + Tab` a couple of times to enter Plan Mode
3. Write your prompt (e.g. "My app needs a dark mode implemented across the UI")
4. Let Claude plan it out — if the plan looks good, accept it
5. Claude will ask for your approval at each step; at the end you can see exactly what Claude did and how it reached its conclusions

**Recap:** When using Claude Code, try to be as descriptive as possible with your prompt. If you want to stay in the loop at every step, use Plan Mode to let Claude dig into the details before touching any code.

---

## 5. The explore → plan → code → commit workflow

![The Explore → Plan → Code → Commit Workflow](image-5.png)

**The Explore → Plan → Code → Commit Workflow**
The fastest way to handle flows from two aspects: the nature of the task at hand, and how Claude Code is configured. This four-stage workflow — Explore, Plan, Code, Commit — is the most reliable way to tackle any implementation.

**Explore**
This is the first place to review context relevant to the task. Claude will use tools like web search and can also use the subagent subagent tool without affecting the main context.

**Plan**
Once the data looks good, select "approve" to move into the "Finalize" phase. You can choose whether to put the "Finalize" button in the plan reviewer or in another "context" box like this. You can put it wherever it makes sense for the feature you're implementing.

**Code**
Claude will do its work in consideration before considering the plan "finalized." You set it to "go in" and finalize the plan. This step executes the coding phase:
- Include a trial audio (Claude) — a test with 2 core multimedia outputs
- Include text handling, a page title covering the entire offset text (within your heading tags), to avoid sending a new page test

**Commit**
Once you've reviewed the changes yourself and are happy with the output, it's time to commit: Claude → generates a commit message in your editor. Press Commit, and Done! From there, Claude generates a commit message in your editor. Enter, and Done.

**Recap:** To be effective with Claude Code, follow the Explore, Plan, Code, and Commit workflow. Claude uses its resources to sequence tasks, Claude writes code, and Claude commits, all ending in a successful deployment.

---

## 6. Context management

![Context Management](image-6.png)

**Context Management**
Context management in Claude Code means managing memory storage — what it was working on, what files it has access to, and more it was involved with. "Think of my context window as the amount of detail Claude can hold at once — it was able to go in there to share information on requests of all kinds."

**What Happens When Context Fills Up**
When context reaches the limit, the current context window will automatically compact — this compresses the session so that Claude can continue working. You can also manually compact using `/compact`.

**Commands**
You can use commands to manually write into the context window:
- `/compact` — compress the current context when it's running low
- If you want to completely start over, you can exit and restart the whole context by running it again

**When to Use `/clear`**
A good rule of thumb:
1. Use it — when you're starting an unrelated task
2. Building on the prior context — when the task is small enough that the prior context still is helpful
3. Use it when running into strange behavior — clearing the context can resolve unexpected results

**Tips for Saving Context Space**
Be specific — the more specific you are in a task, the less Claude Code will try to do, the less context you'll use up.

Manage your CLAUDE.md/MEMORY.md to have more concise and accurate summaries of your project. This way Claude Code will spend less context searching for the right patterns, and it will have the most relevant information on hand.

**Recap:** Managing context within Claude Code is one of the best ways to stay productive. Use subagents to delegate heavy lifting, run `/compact` regularly, and keep CLAUDE.md concise and accurate.

---

## 7. Code review

![Code Review](image-7.png)

**Code Review**
Claude Code has a few built-in features that make your git workflow faster.

**Review with a Subagent**
Before you push a PR, ask Claude to use a subagent to review your changes. The subagent runs in its own context window with fresh eyes — it doesn't carry the bias of the main agent that just spent the session writing the code. When creating a code-reviewer subagent, restrict it to read-only tools — a reviewer should flag issues, not edit files.

**The `/commit-push-pr` Skill**
The `/commit-push-pr` skill handles the commit, push, and PR creation all in one step. Instead of doing each manually, just run the skill and Claude takes care of it. If you have a Slack MCP server configured with channels listed in your CLAUDE.md, it will automatically post the PR link to your team's channel.

**Session Linking with `--from-pr`**
When Claude creates a PR through `gh pr create`, the session gets linked to that PR automatically. If you need to come back to it later — maybe to address review comments or fix a failing build — run:

```
claude --from-pr <PR_NUMBER>
```

This picks up right where you left off.

**Recap:** Use a subagent for an unbiased code review before pushing. Use `/commit-push-pr` to handle the full commit-to-PR flow in one step. And use `--from-pr` to resume work on a PR later.

---

## 8. The CLAUDE.md file

![The CLAUDE.md File](image-8.png)

**The CLAUDE.md File**
One of the most useful tools in Claude Code is the CLAUDE.md file. It starts fresh every time. It has no explicit list of your project-specific assumptions — which makes it harder to get exactly right. Think of it as an onboarding doc for every new session. The contents of the CLAUDE.md file are automatically added to every session.

**The Problem It Solves**
Without a CLAUDE.md, every new session starts fresh — Claude Code re-discovers your patterns and standards from scratch. A CLAUDE.md file solves this by documenting your project's conventions, dependencies, and code standards so Claude references them automatically every time you start a session.

**An Example**
A project CLAUDE.md file looks like:
```
# Project
This is a [description] using [tech stack].

# Commands
[relevant project commands]

# Project-level expected outputs
[what good outputs look like]
```

It's straightforward: once you create a Claude Code-generated CLAUDE.md, it knows how to create a React component, it learns your code contributions, and it understands what style you use.

**CLAUDE.md is for Teams**
You can (and should) commit your CLAUDE.md so your whole team controls your Claude Code conventions. There's actually a hierarchy of files:
- Project-level CLAUDE.md lives in the root of your directory. This is best used for project-specific context
- A User-level CLAUDE.md lives in your home directory — this is for your personal configuration preferences. It's best used for personal configuration that you want to apply across all projects

**Tips**
Start without one. We recommend starting a project without a CLAUDE.md and having Claude generate one for you from scratch. This keeps it honest. CLAUDE.md is only as useful as it is accurate — if it's wrong, you'll have to correct the results. When you're ready to create it, run `/init` to have Claude generate one for you.

Reference project docs: if you have documentation on your project (like an API reference), point to the file using the `@` symbol with the file path.

**Recap:** The difference between a frustrating Claude Code session and a productive one often comes down to CLAUDE.md — it's how you tell Claude the rules of the game before starting.

---

## 9. Subagents

![Subagents](image-9.png)

**Subagents**
Claude can delegate tasks to subagents that break them down and run component tasks in parallel, improving your context management. Each subagent operates in its own isolated context window.

**How It Works**
Managing context in Claude Code is important. A lot of the context window gets consumed by things like tool calls exploring your codebase or running web searches for research. What Claude discovers during that exploration isn't always relevant to the main feature you're building. This is where subagents come in — Claude spawns a subagent to handle a task like "explore this codebase for me." The subagent runs in parallel with its own context window, does all the exploration work, and once finished, summarizes its findings and returns that summary back to Claude. The result: you get the answer you were looking for, without the entire journey it took to get there cluttering your main context.

**Creating Your Own Subagent**
Subagents are defined in Markdown files with YAML frontmatter. The easiest way to get started is to let Claude generate one for you. Run:

```
/agents
```

Then select "Create new agent." You'll walk through steps including choosing the scope of the agent, defining its purpose, selecting the tools it has access to, and even picking a color for it. This also tells Claude when to call the subagent based on the prompts you give it.

**Further Customization**
- **Persistent memory** — lets your subagent retain memory across conversations. Great if you're using it consistently on the same projects
- **Preload skills into subagents** — add the `skill` key and list skills by name. Note that unlike skills in your main conversation, the entire skill is loaded into context

**Recap:** Keeping your context window clean is one of the best ways to stay productive with Claude Code. With subagents, you can run an agent in the background to handle the heavy lifting and return just the answer to your main context window. Want to go deeper? Check out the dedicated course: Introduction to subagents.

---

## 10. Skills

![Skills](image-10.png)

**Skills**
Skills are reusable, invocable workflows you can run inside Claude Code with a `/skill-name` command. They package up knowledge, instructions, and context so Claude can follow a consistent process for a repeated task.

Skills are defined in Markdown files stored in `.claude/skills/`. Each skill gets its own folder with a `SKILL.md` file. Once installed, you can invoke it with `/skill-name` in any Claude Code session.

Want to go deeper? Check out the dedicated course: [Introduction to agent skills](../15-introduction-to-agent-skills/)

---

## 11. MCP

![MCP](image-11.png)

**MCP (Model Context Protocol)**
MCP is an open standard that Anthropic built for Claude Code connects to external services and data sources. It lets you connect one or more "tools" to Claude so that it has access to more data and more actions than it would have out of the box.

**What Can You Do With It?**
The concept of "tool" in MCP is very broad. This is different from built-in tools — you can give Claude an MCP tool for:
- Querying a database
- Posting to Slack
- Managing GitHub issues
- Reading from a CRM
- Accessing file systems outside your project

**Adding an MCP Server**
There are two main ways to add an MCP server:
1. **MCP servers via remote services** — available from the internet; you connect Claude Code to the server's details and Claude Code runs it
2. **Local** — available on all your projects. The server runs on your machine

You can manage your servers using the `/mcp` command in Claude Code.

**Scoping Servers**
You can control at what level a server is available:
1. **Global** — available to this current context
2. **Local** — available on all your projects

**Context Costs**
MCP tool definitions add tokens to every message. If you have a lot of MCP servers configured (e.g. 30+), Claude Code becomes less efficient because the context fills up with tool definitions before any actual work happens. For single projects, benefit from an MCP server by using a context filter. If a tool has a lot of 4+ attributes, the Claude Code instance may take more than 50% of its total context defining all the tools available. From there, it may not find the right tools to run.

**Recap:** MCP connects Claude Code to data and services. Add MCP servers thoughtfully — scoping them correctly and keeping the total number manageable keeps your context available for actual work.

---

## 12. Hooks

No screenshot captured for this lesson.

**Key concepts:**
- Hooks are shell scripts that run outside the Claude Code agent loop
- They execute deterministically in response to events (e.g. before/after a tool call, on session start)
- Common uses: linting, auto-formatting, logging, running tests after code edits
- Configured in your Claude Code settings file
- Unlike agents and skills, hooks cannot be interrupted — they always run

---

## 13. Course quiz

No screenshot captured for this lesson.

**Quiz covers all 5 sections:**
- What is Claude Code? (agentic loop, permissions, capabilities)
- Your first prompt (approval vs auto-accept, plan mode)
- Daily workflows (explore→plan→code→commit, context management, code review)
- Customizing Claude Code (CLAUDE.md, subagents, skills, MCP, hooks)
- Key commands (`/compact`, `/clear`, `/init`, `/agents`, `/mcp`, `/commit-push-pr`)

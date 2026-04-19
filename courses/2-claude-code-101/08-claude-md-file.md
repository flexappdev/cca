# 8. The CLAUDE.md File

**Course:** [Claude Code 101](./index.md)
**Screenshot:** [image-8.png](../../screenshots/2-claude-code-101/image-8.png)

## Notes

**The CLAUDE.md File**
Think of CLAUDE.md as an onboarding doc for every new session. The contents of the CLAUDE.md file are automatically added to every Claude Code session.

**The Problem It Solves**
Without a CLAUDE.md, every new session starts fresh — Claude Code re-discovers your patterns and standards from scratch. A CLAUDE.md file solves this by documenting your project's conventions, dependencies, and code standards so Claude references them automatically every time.

**An Example Structure**
```
# Project
This is a [description] using [tech stack].

# Commands
[relevant project commands]

# Project-level expected outputs
[what good outputs look like]
```

**CLAUDE.md is for Teams**
Commit your CLAUDE.md so your whole team controls your Claude Code conventions. Hierarchy:
- **Project-level** — lives in the root of your directory; best for project-specific context
- **User-level** — lives in your home directory (`~/.claude/CLAUDE.md`); best for personal configuration preferences across all projects

**Tips**
- Start without one — let Claude generate it using `/init`
- CLAUDE.md is only as useful as it is accurate — if it's wrong, you'll get wrong results
- Reference project docs using the `@` symbol with the file path

**Recap:** The difference between a frustrating Claude Code session and a productive one often comes down to CLAUDE.md — it's how you tell Claude the rules of the game before starting.

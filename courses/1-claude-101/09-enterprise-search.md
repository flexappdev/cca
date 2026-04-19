# 9. Enterprise Search

**Course:** [Claude 101](./index.md)
**Screenshot:** [image-9.png](../../screenshots/1-claude-101/image-9.png)
**Estimated time:** 5 minutes

## Learning objectives

By the end of this lesson, you will be able to:
- Explain what Enterprise Search is and the types of questions Enterprise Search can answer
- Understand how the setup process works for both admins and users
- Recognize some good opportunities to use Enterprise Search to surface organizational data

## What is Enterprise Search?

Enterprise Search adds an "Ask Your Org Name" option to your sidebar. Unlike regular search specifically for finding and retrieving knowledge housed across your company's tools and data sources.

Unlike regular Claude, which is configured for your entire organization — it works by using context instructions specifically designed for information gathering, using context instructions configured by the Anthropic team.

Allow regular chats with colleagues that can help you finding and retrieving organizational data.

## What you can ask

Enterprise Search is particularly valuable for questions that span multiple sources or require synthesizing information from across your organization:

**Policy and process questions:**
- "What is our company's remote work policy?"
- "How do I submit an expense report?"
- "What is the process for requesting time off?"

**Research and analysis:**
- "What are the main reasons customers cite for choosing competitors?"
- "Summarize discussions about the Q4 product roadmap"
- "Find information about our customer onboarding process"

**Onboarding new team members:**
- "How does our authentication system work?"
- "Walk me through the hiring workflow for the engineering team"
- "Walk me through the deploying staging pipeline"

**Performance and product tracking:**
- "Find documents and materials related to the marketing campaign"
- "What were the key decisions from last week's leadership meeting?"
- "Summarize team contributions to the infrastructure initiative"

When you ask a question, Claude searches across all your connected tools — such as SharePoint documents, Slack conversations, Gmail threads, Google Drive files, Notion pages, and more — and returns a synthesized response. Plus, it always cites its sources so you can get the full context.

## Configuration of Enterprise Search

For the organization, then individual users authenticate with their personal accounts.

**For admins (Owners):**
For Enterprise organizations, but an Owner needs to complete the initial setup before team members can use it:
1. Click "Ask Your Org" in the left sidebar
2. Click "Set it up for me" to continue to the next step; there's also an option to "enable this feature" to turn the feature off
3. Connect your organization's tools. Google Workspace is recommended but optional.
4. Click "+ Add more" to set up any additional tools
5. When complete, the project name will appear as an "Ask [Channel]" in everyone's sidebar

Once setup is complete, the project becomes available to all members of your organization.

**For users:**
After an admin has set up Enterprise Search, you'll see the "Ask [Org Name]" project starred in your sidebar:
1. Click on the project in your sidebar
2. Follow the prompted onboarding flow to connect to the recommended services
3. Authenticate with each service you want to search (Slack, Google, Microsoft 365, etc.)
4. Start asking Claude questions about your organization's knowledge

## "But is a lot of data … is this safe?"

In short, yes. Enterprise Search only shows you information you already have permission to access in your connected tools — Claude cannot surface information that's already private, and your connected data isn't indexed or stored separately.

## Lesson reflection

Before moving on, consider:
- What questions do you and your colleagues ask frequently that could be answered by searching your organization's documents and conversations?
- Are there onboarding or training scenarios where Enterprise Search could help new team members get up to speed more quickly?
- Which data sources would be most valuable to connect for your specific organization?

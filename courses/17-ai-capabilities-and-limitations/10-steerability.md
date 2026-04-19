# AI Capabilities and Limitations

What you'll learn

Estimated time: 30 minutes

By the end of this lesson you'll be able to:

- Explain why steerability works (fine-tuning taught the model instruction-following) and why it has limits (instructions are followed via pattern-matching, not understanding)
- Predict where control is tightest (short, concrete, verifiable instructions) versus loosest (long reasoning chains, abstract asks, native precision tasks)
- Identify reasoning drift, letter-over-spirit, and brittle arithmetic as characteristic steerability failures
- Recognize system prompts, code execution, visible reasoning, and structured outputs as product features addressing this limitation

## How much are you actually in control?

  Before you read

  Where do you think "write exactly 100 words, no more" sits on the Steerability continuum? Drag the marker below, then lock in your guess.







    Capability
    Limitation


      Your task



      Short, concrete, verifiable instructions (“respond as a table,” “under 100 words”)
      Long reasoning chains, abstract asks, native precision







        What this enables

      - Precise control over format, style, length, and tone
- Role-setting: adopt a persona or expertise framing and hold it
- Multi-step task execution following a clear process
- Iterative refinement (“make it shorter,” “more specific here”)





        Where it characteristically fails

      - Reasoning drift: small errors compound over long chains
- Letter over spirit: instruction satisfied literally, intent missed
- Prompt injection: unwanted/unsafe instructions in documents can be followed too





        Product features that push the edge out

      - System prompts / custom instructions: standing directions that don’t dilute
- Code execution: offload math to an actual interpreter
- Visible reasoning: catch drift at step two, not the final answer
- Structured output modes: cut down on letter-over-spirit wandering




  Drag the marker to place your guess for "write exactly 100 words, no more". The panel that lights up tells you what to watch for.

  Lock in my guess

   .content-fade

 Edit mode panel

Steerability is the model's ability to follow your directions. Say "respond with a table" and you get a table; specify a role, a tone, a format, a word limit, and the model applies them—often on the first try. This didn't happen automatically: fine-tuning is a second round of training where the model learns from curated examples of good assistant behavior, picking up the habit of treating your text as a request and following the rules you set. But steerability isn't the same as understanding. The model follows instructions through the same pattern-completion engine it uses for everything else, so there's always some gap between the words you typed and the intent you had in mind. Ask for "under 100 words, punchy" and you might get exactly that—with the one nuanced finding you actually needed cut because it made the summary less punchy. The instruction was honored to the letter; what you meant was missed.

Picture your instructions on a spectrum. Short, concrete, checkable directions—"respond as a table," "under 100 words," "use this exact schema"—sit firmly in the capability zone: the pattern is simple to match and you can verify it at a glance. Slide toward long reasoning chains, abstract asks like "be insightful," or anything requiring native numeric precision, and control thins out. The characteristic failures:

- Reasoning drift—small errors compound over long chains and the model doesn't notice.
- Letter over spirit—the instruction is honored literally but uselessly.
- Prompt injection—because the model follows instructions embedded in text, a malicious instruction hidden inside a document can be followed too. More of a security concern than a daily one, but worth knowing exists.

Product features narrow these gaps: system prompts give you standing directions that don't dilute as the conversation gets longer, visible reasoning lets you catch drift at step two rather than in the final answer, structured output modes cut down on letter-over-spirit wandering. Your techniques matter too: state the goal alongside the steps, break long chains with checkpoints you can verify, and when an instruction lands literally but uselessly, restate the goal rather than the instruction—repeating "be concise" louder doesn't fix a concision problem that was really an intent problem.

#### Key takeaways

- Steerability means the model follows instructions via Next Token Prediction. Capability zone: short, concrete, verifiable instructions. Format specs, length limits, explicit roles. Limitation zone: long chains of reasoning, abstract or ambiguous instructions, anything requiring native numerical or logical precision. Characteristic failures: reasoning drift (small errors compound) and letter-over-spirit (the instruction was honored but the intent wasn't). System prompts, code execution, visible reasoning, and structured output modes exist to keep your intent from diluting. When an instruction is followed literally but uselessly, restate the goal. Repeating the instruction with more force won't close the gap.
- 4D connection: Steerability is what makes Description powerful and what bounds it. Understanding the gap between words and intent changes how you write prompts and where you insert checkpoints.

## Exercises

Exercise: The Goal Rewrite

Why? The gap between what you say and what you mean is where most steerability failures live. This exercise teaches you to prompt from intent, not just from instruction.

Pick a task from your Lesson 1 list that involves multiple steps or a specific output format. Write down the goal in one sentence: what you're actually trying to accomplish, not just what the output should look like. ("Convince my team this timeline is realistic" is a goal. "Three bullet points" is a format.)

Now run three probes:

- Probe 1: Tight control. Give a short, concrete, verifiable instruction related to your task: "respond as a three-column table," "exactly five bullet points," "second person throughout." Check whether it held precisely. This is the capability zone: the instruction is simple enough to pattern-match perfectly.
- Probe 2: Reasoning drift. Ask for a version of your task that requires 4–5 dependent steps. Review the output step by step. Did a small error early on carry through to the end? Now try again, but ask the AI to stop and show you the result of step 2 before continuing. Compare what you get when you insert a checkpoint versus when you let it run.
- Probe 3: Letter vs. spirit. Give an instruction that could be satisfied literally but uselessly. "Make this shorter" on a draft where the real problem is structure. "Make this more professional" on an email where the real problem is that it's burying the ask. See what you get. Then re-prompt with the goal stated explicitly alongside the instruction: "Make this shorter. My goal is to keep the executive's attention through the key finding on page two." Compare.

Go back to your task list. For any multi-step tasks, note where you'd insert a checkpoint. For any tasks where you've been prompting with format alone, draft the goal statement you'll add next time.

## Lesson reflection

- How often have you been stating format but not goal? What changes when you include both?
- What's one recurring task where you'll add a mid-process checkpoint starting this week?

## What's next

You've now met all four properties individually. In the next lesson we look at how they interact, because most real-world failures are two properties meeting.

#### Feedback

As you progress through the course, we'd love to hear from you about how you are using concepts from the course in your work, plus any feedback you may have. Share your feedback here.

#### Acknowledgments and license

Copyright 2026 Anthropic. Original work building on the AI Fluency Framework developed by Prof. Rick Dakan (Ringling College of Art and Design) and Prof. Joseph Feller (University College Cork). Released under the CC BY-NC-SA 4.0 license.

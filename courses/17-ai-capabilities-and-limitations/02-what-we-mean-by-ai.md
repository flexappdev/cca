# AI Capabilities and Limitations

What you'll learn

Estimated time: 20 minutes

By the end of this lesson you'll be able to:

- Distinguish generative AI from the classification and prediction AI you already encounter daily
- Understand that generative AI's properties exist on a continuum from capability to limitation
- Preview the four core properties you'll explore in depth: Next Token Prediction, knowledge, working memory, and steerability

## Building a mental model of the machine

AI Capabilities & Limitations Framework
Four properties that shape what AI can and can't do for you. Each sits on a spectrum — the further right, the more you should verify and compensate.

CapabilityLimitation

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F6rh0oaxpxl8bv3641a1ejj76o%2Fpublic%2F1774568560%2FpictoInference.1774568559957.png)

Next Token PredictionWhere do AI answers come from?

Well-worn paths: summarize, reformat, explain common conceptsNovel territory, sparse patterns, "true vs. sounds true"

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F6rh0oaxpxl8bv3641a1ejj76o%2Fpublic%2F1774568560%2FpictoGlobe.1774568560630.png)

KnowledgeWhat does AI actually know?

Frequent, recent-in-training, consistent: mainstream topics, popular languagesRare, post-cutoff, niche, local, or contested topics

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F6rh0oaxpxl8bv3641a1ejj76o%2Fpublic%2F1774568561%2FpictoChip.1774568561218.png)

Working MemoryWhat is the AI paying attention to right now?

Material fits comfortably, session is current, you supply relevant contextVery long docs/conversations, expecting cross-session continuity (the cliff)

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F6rh0oaxpxl8bv3641a1ejj76o%2Fpublic%2F1774568561%2FpictoKnobs.1774568561703.png)

SteerabilityHow much am I in control?

Short, concrete, verifiable instructions ("respond as a table," "under 100 words")Long reasoning chains, abstract asks, native precision

"AI" is a broad term. The recommendation engine picking your next video, the spam filter in your inbox, the fraud model flagging a suspicious charge—all of that is AI, but none of it is generative. Those systems sort, rank, classify, and predict. They're enormously useful and running in the background of your life constantly, but they're not what this course is about. What's changed recently is the rise of generative AI: systems that produce new content—text, images, code, audio—rather than categorize existing content. Generative AI is built in two stages: pretraining, where it learns patterns from massive amounts of data, and fine-tuning, where it's shaped to be safe, ethical, and helpful.

At its core, generative AI is a prediction system—not uniformly capable or uniformly unreliable, but strong and weak along specific, predictable axes. Most of the time, the strength and the weakness come from the same underlying mechanism: an AI writes compellingly because it's a prediction engine, and it hallucinates for the same reason. This course covers four such properties:

- Next Token Prediction—where do the answers come from? The model isn't looking things up; it's writing what comes next, one fragment at a time.
- Knowledge—what does it actually know? Broad but uneven, frozen at a training cutoff.
- Working Memory—what is it paying attention to right now? What's in the context window is what's available.
- Steerability—how much are you in control? Remarkably directable, but there can be a gap between what you intended and what landed.

The goal is calibrated trust: learning to ask where your task sits on each continuum, whether you're in well-trodden territory or near an edge, and what the stakes are if you're wrong.

#### Key takeaways

- Generative AI produces new content rather than classifying existing content.
- AI isn't uniformly capable or uniformly unreliable. It's strong and weak along four predictable axes: Next Token Prediction, Knowledge, Working Memory, and Steerability.
- Each property is a continuum. The same mechanism gives you both the capability and the limitation.
- Calibrated trust means locating your task on the continuum, not granting or withholding trust wholesale.

## Exercises

Exercise: Generative or Not?

Why? You just learned that generative AI is fundamentally different from the AI that filters your spam and recommends your next video. Now you're going to use that distinction on your own experience.

- List five AI-powered features you've interacted with this week. Cast a wide net: autocomplete, photo tagging, spam filtering, chatbot answers, translation, product recommendations, voice assistants.
- For each one, jot down your call: is it producing new content, or is it sorting, ranking, and classifying existing content?
- Share your list with an AI and ask it to check your calls. For any you got wrong (or weren't sure about), ask it to explain the distinction in one sentence. Then ask: "Which of these five is most likely to have a failure mode this course will help me understand?"
- Go back to your Lesson 1 task list. For each task, tag it with the property question that feels most relevant right now: Where do the answers come from? (Next Token Prediction) What does it know? (Knowledge) What's it paying attention to? (Working Memory) How much am I in control? (Steerability)

You're not expected to get these right. You're creating predictions you'll test over the next four lessons.

## Lesson reflection

- Did the generative/classification distinction with AI change how you think about any tool you use?
- Look at how you tagged your task list. Did any task feel like it could belong under more than one property?

## What's next

Before we dig into the four properties, we'll spend one lesson on how an AI system ends up with a personality at all. Why it's polite, helpful, honest, why it sometimes agrees too easily, why it declines certain things. That shaping process leaves fingerprints on everything that follows.

#### Feedback

As you progress through the course, we'd love to hear from you about how you are using concepts from the course in your work, plus any feedback you may have. Share your feedback here.

#### Acknowledgments and license

Copyright 2026 Anthropic. Original work building on the AI Fluency Framework developed by Prof. Rick Dakan (Ringling College of Art and Design) and Prof. Joseph Feller (University College Cork). Released under the CC BY-NC-SA 4.0 license.

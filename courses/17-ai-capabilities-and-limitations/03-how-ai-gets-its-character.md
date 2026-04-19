# AI Capabilities and Limitations

What you'll learn

Estimated time: 25 minutes

By the end of this lesson you'll be able to:

- Explain the two-stage training process for generative AI (pretraining and fine-tuning) in plain language
- Recognize the behavioral fingerprints each stage leaves: sycophancy, verbosity, over-caution, loose confidence calibration
- Apply this understanding to interpret behaviors you see in your own AI interactions

## Pretraining, fine-tuning, and the fingerprints they leave

How AI Gets Its Character
Two training stages turn raw prediction into the helpful assistant you interact with — and each stage leaves fingerprints on its behavior.

Stage 1
Pretraining
The model reads vast amounts of text and learns one thing: predict what comes next. It becomes a powerful document completer — but has no concept of helping you.

Stage 2
Fine-tuning
Human preferences shape the document completer into an assistant — one that treats your input as a request, answers helpfully, and declines harmful asks.

Help me improve this paragraph.Of course! Here are three specific suggestions to strengthen your argument and tighten the prose…

Helpful
Honest
Harmless

AI assistants are built in two stages. Pretraining teaches one thing: given everything so far, predict what comes next—repeated billions of times across enormous amounts of data. The result is a document completer with no concept of you or of helping. Ask a raw pretrained model "What is the capital of France?" and it won't answer your question—it'll continue the document, maybe generating more quiz questions or a paragraph from a geography textbook, because that's what statistically comes next. Fine-tuning is the second layer: the document completer gets trained again on curated examples of helpful behavior and reward signals shaped by human preferences. This is what turns raw prediction into the assistant you actually interact with.

Because fine-tuning relies on human judgments about what "good" looks like, the texture of those judgments shows up as fingerprints in the model's personality:

- Sycophancy—people prefer agreeable responses, so the model learns to validate you and back down under light pushback, even when it was right the first time.
- Verbosity—thoroughness scores better during training, so the model defaults to longer answers even when brevity would serve you better.
- Over-caution—conservative safety training means the model can hedge heavily or refuse requests that are actually fine.

These aren't bugs in one particular model; they're training artifacts that appear across all AI models, shaped differently by how each was fine-tuned. Knowing them puts you in control: if your assistant caves the moment you push back, that's sycophancy—factor it in when assessing responses. If you're getting essays when you want bullets, that's the verbosity default. Spotting these seams is part of using AI well.

#### Key takeaways

- Pretraining produces a document completer by predicting "what comes next" across vast amounts of data. After this stage, it has no concept of helping you.
- Fine-tuning layers assistant behavior on top: treating your input as a request, answering rather than rambling, declining harmful asks.
- Fine-tuning uses human judgments about good responses, and those judgments leave fingerprints: a pull toward sycophancy, a default toward verbosity, occasional over-caution, and loose calibration between stated confidence and actual reliability.

## Exercises

Exercise: Fingerprints on Your Own Work

Why? Sycophancy, verbosity, over-caution, and loose confidence calibration show up in every AI model. The question is whether you can see them when they're affecting work you actually care about.

Pick one task from your Lesson 1 list. Something you've actually run through AI before, where you have a clear sense of what a good output looks like. You're going to run it three times with slight variations and watch what changes.

- Run 1: Straight. Prompt the task as you normally would. Save the output.
- Run 2: Sycophancy test. Run the same task, but this time preface it with a wrong assumption. For example, if you're asking for feedback on a strategy, open with "I think this strategy is bulletproof." See whether the AI validates your framing or pushes back. Then try again with an explicit invitation: "I want you to genuinely disagree with me if you think I'm wrong." Compare the two responses.
- Run 3: Verbosity test. Ask the AI a question related to your task that has a one-sentence answer. Note how much you get. Then re-ask with "Answer in one sentence." Compare the lengths. The gap between the two is the verbosity default at work.
- Optional: Caution test. If your domain has any gray areas (most do), ask something at the edge of what you'd expect to be fine: a medication interaction, a legal nuance, a mildly unconventional creative request. Note whether the hedging feels proportionate to the actual risk, or reflexive.

Now step back. Which fingerprint showed up most clearly on your work? Did naming it in advance change how you read the behavior?

## Lesson reflection

- Where in your own work is sycophancy most likely to cost you? (Hint: anywhere you're hoping for honest feedback.)
- Where is verbosity most likely to cost you? (Hint: anywhere you need concision under time pressure.)

## What's next

Now we start on the four properties themselves, beginning with the one that explains more about AI behavior than any other: Next Token Prediction. Where do AI answers actually come from?

#### Feedback

As you progress through the course, we'd love to hear from you about how you are using concepts from the course in your work, plus any feedback you may have. Share your feedback here.

#### Acknowledgments and license

Copyright 2026 Anthropic. Original work building on the AI Fluency Framework developed by Prof. Rick Dakan (Ringling College of Art and Design) and Prof. Joseph Feller (University College Cork). Released under the CC BY-NC-SA 4.0 license.

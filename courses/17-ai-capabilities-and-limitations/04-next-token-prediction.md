# AI Capabilities and Limitations

What you'll learn

Estimated time: 30 minutes

By the end of this lesson you'll be able to:

- Explain Next Token Prediction as the core mechanism of generative AI and why it produces both fluency and hallucination
- Locate tasks on the Next Token Prediction continuum (well-worn path vs. novel territory)
- Identify specificity (names, dates, citations, statistics) as the zone where fabrication concentrates
- Recognize product features (citations, uncertainty signaling, constrained generation, generator-verifier pattern) that are mitigations for this limitation

## Autocomplete at scale

  Before you read

  Where do you think "summarize a long report" sits on the Next Token Prediction continuum? Drag the marker below, then lock in your guess.







    Capability
    Limitation


      Your task



      Well-worn paths: summarize, reformat, explain common concepts
      Novel territory, sparse patterns, “true vs. sounds true”







        What this enables

      - Fluent, natural-sounding text in virtually any style or format
- Rapid synthesis of ideas across distant fields
- Strong performance on tasks resembling what the model has seen before
- Coherent continuation of any thread (a story, an argument, a block of code)





        Where it characteristically fails

      - Hallucination: the plausible continuation isn’t always the true one
- Confabulation: fills gaps with plausible material rather than flagging them
- Inconsistency: sampling means the same prompt can yield different outputs
- Misplaced confidence: smooth prose can wrap a guess





        Product features that push the edge out

      - Citations & source grounding: trace what’s backed vs. generated
- Uncertainty signaling: the model flags its own shakiness
- Constrained generation / skills: narrow the space where fabrication sneaks in




  Drag the marker to place your guess for "summarize a long report". The panel that lights up tells you what to watch for.

  Lock in my guess

   .content-fade

 Edit mode panel

At the heart of generative AI is prediction: given everything written so far, predict what comes next, one fragment at a time. It's closer to an extraordinarily sophisticated autocomplete than to a search engine—and that distinction matters, because a citation that looks like a real citation satisfies the pattern just as well as one pointing to a paper that actually exists. Ask an AI to summarize a well-known essay and you get clean, coherent prose: a well-worn path, encountered thousands of times. Ask it to list three recent papers by a mid-level researcher in a niche subfield, and you get the same confident tone, the same fluent prose—but the ground underneath is shakier. Some may be real, some may be fabrications. You have to check.

The same generative process is always running; what changes is how well-worn the path is. Tasks the model has seen in countless variations—summarizing, reformatting, explaining common concepts—land in the capability zone where patterns are dense and consistent. Novel territory and obscure topics drift toward the edge, where the model keeps generating fluently but accuracy thins. The strength and the weakness are the same property. Product features exist to help: citations let you trace what's backed versus generated, uncertainty signaling flags the model's own shakiness, constrained generation narrows where fabrication can sneak in. But the key habits are yours to build:

- Confident tone is not an accuracy signal—smoothness and correctness are independent.
- Specificity is where fabrication concentrates: names, dates, statistics, citations, quotes, URLs. The more precise the claim, the more it warrants a check.
- Treat outputs as drafts to verify, particularly when stakes are high or the domain is unfamiliar.
- The model can't reliably tell grounded from invented. You have to do that part.

#### Key takeaways

- Next Token Prediction refers to the fact that generative AI writes answers word by word based on what tends to follow what. Capability zone: tasks that resemble patterns the model has seen many times (summarizing, reformatting, explaining common concepts). Limitation zone: novel or sparse territory, and anywhere the task requires distinguishing "true" from "sounds true." Fabrication concentrates in specificity: names, dates, statistics, citations, URLs, quotes. The more precise a claim, the more it warrants verification. Product features like citations, uncertainty signaling, constrained generation, and generator-verifier loops exist specifically to push this limitation further out.
- 4D connection: Next Token Prediction is the foundation of Discernment. Knowing the output was generated tells you exactly what kind of scrutiny to apply.

## Exercises

Exercise: The Verification Test

Why? You now know that the same generative process that makes AI fluent is the one that makes it fabricate. Time to see that on your own turf, in a domain where you'll catch it.

Go back to your task list and pick the task where you're most confident in your domain expertise. You need a topic where you're the expert, because you need to be able to verify what comes back. Write down five specific, checkable facts from that domain: a person's job title, a publication date, a statistic, a product specification, a direct quote, a URL. Things you know to be accurate and can confirm independently.

Now run three probes:

- Probe 1: The capability zone. Ask the AI to explain or summarize a well-known concept in your domain. Something popular and well-documented. Note the fluency. Spot-check the content. This is what the capability zone feels like: smooth, confident, and largely accurate.
- Probe 2: Specificity under pressure. Ask the AI to provide five checkable specifics in your domain: cite three sources, name an author, give exact figures, provide a URL. Verify every one. Score it out of five: how many were fully accurate? If it fabricates, note how confident it sounded doing it.
- Probe 3: Sampling in action. Run the exact same specific-facts request in a fresh conversation. Compare the two outputs. What stayed consistent? What changed? The variation you see is Next Token Prediction's sampling at work.

Stretch goal: Re-run Probe 2 in a tool with citations enabled (like Research mode in Claude). Score it again. Does having sources to check change the score?

## Lesson reflection

- Would you have caught fabrications in a domain you didn't know well?
- Look at your task list: which tasks sit mostly in the capability zone, and which push into specificity that needs verification?

## What's next

Next Token Prediction explains how the AI generates. Next we look at what it's generating from: the Knowledge property. What does the model actually know, where does that knowledge come from, and where are the gaps?

#### Feedback

As you progress through the course, we'd love to hear from you about how you are using concepts from the course in your work, plus any feedback you may have. Share your feedback here.

#### Acknowledgments and license

Copyright 2026 Anthropic. Original work building on the AI Fluency Framework developed by Prof. Rick Dakan (Ringling College of Art and Design) and Prof. Joseph Feller (University College Cork). Released under the CC BY-NC-SA 4.0 license.

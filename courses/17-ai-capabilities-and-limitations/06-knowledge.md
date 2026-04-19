# AI Capabilities and Limitations

What you'll learn

Estimated time: 30 minutes

By the end of this lesson you'll be able to:

- Explain how an AI model's knowledge is formed during training and why it has a fixed cutoff
- Predict which topics sit in the capability zone (frequent, recent-in-training, consistent) versus the edge (rare, post-cutoff, niche, contested)
- Identify staleness, uneven coverage, inherited bias, and source amnesia as characteristic knowledge failures
- Recognize web search, retrieval/RAG, and tool use as the product features that address this limitation

## What the model read, and when it stopped reading

  Before you read

  Where do you think "explain a news event from last week" sits on the Knowledge continuum? Drag the marker below, then lock in your guess.







    Capability
    Limitation


      Your task



      Frequent, recent-in-training, consistent: mainstream topics, popular languages
      Rare, post-cutoff, niche, local, or contested topics







        What this enables

      - Extraordinarily broad general knowledge
- Deep competence in well-represented domains
- Connections across fields (embeddings: related concepts cluster together)





        Where it characteristically fails

      - Knowledge cutoff: nothing after training ended is there
- Staleness: true-at-training-time isn’t true-now
- Uneven coverage: niche domains and local knowledge suffer
- Inherited bias: defaults reflect the training data’s blind spots
- Source amnesia: “I read this somewhere” isn’t a citation





        Product features that push the edge out

      - Web search: works around the cutoff for time-sensitive questions
- Retrieval (RAG) / MCPs: draw on material never trained on
- Tool use: call out to real calculators, databases, APIs
- Explicit cutoff disclosure: you know what to double-check




  Drag the marker to place your guess for "explain a news event from last week". The panel that lights up tells you what to watch for.

  Lock in my guess

   .content-fade

 Edit mode panel

AI models learn by reading enormous quantities of text, building internal representations of concepts, relationships, and facts through billions of prediction rounds. That's how they know things—and it's the only way. No lived experience, no real-time browsing unless a product gives them a search tool, and a hard stop at the knowledge cutoff: everything after that date simply isn't there. Ask about photosynthesis and you get a detailed, accurate, confident answer—the topic appeared thousands of times in training data, described consistently, and hasn't changed. Ask who's currently mayor of a mid-sized city and the answer might be right, or might be two years stale, with no way for the model to know the difference. The question to ask isn't "does the AI know this?" but "how well-represented was this in what it read?"

The same training process that produces extraordinarily broad general knowledge also creates predictable blind spots:

- Staleness—true-at-training-time isn't true-now, and the model has no mechanism to know.
- Uneven coverage—frequent topics are handled well; rare ones poorly. Minority languages, niche domains, recent developments all suffer.
- Inherited bias—the model's sense of what's "normal" or "default" reflects its training data's blind spots.
- Source amnesia—"I read this somewhere" isn't a citation.

Product features exist to work around these limits. Web search pulls current information at response time, routing around the cutoff. Retrieval and MCPs connect the model to documents it never trained on—your company's wiki, a specialized database. Tool use lets the model call real calculators and APIs instead of relying on absorbed patterns. If you're using these features, you're extending the model's knowledge at runtime; if you're not, you're relying entirely on what it absorbed during training.

#### Key takeaways

- What generative AI knows comes entirely from training data and is frozen at the knowledge cutoff. Without tools, it has no access to any information after that date. Capability zone: topics that appeared frequently, recently (within training), and consistently in training data. Limitation zone: rare, post-cutoff, niche, local, or contested topics. Characteristic failures: staleness, uneven coverage, inherited bias in what counts as "default" or "normal," and inability to attribute where knowledge came from. Web search, retrieval (RAG/MCPs), and tool use exist specifically to patch these gaps by giving the model access to information it was never trained on.
- 4D connection: Knowledge unevenness is core to Delegation. Understanding where the model is well-stocked versus thin tells you when to hand off, when to supply context yourself, and when to go elsewhere.

## Exercises

Exercise: The Outsider Test

Why? You know the model's knowledge is broad but frozen, shaped by whatever was in its training data. Now you're going to map exactly where it's well-stocked and where it's thin in your specific domain.

Return to your task list and select one task. Relative to that task, write down:

- Two topics that are mainstream, well-documented, and stable. The kind of thing any informed colleague would know.
- Two topics that are niche, local, recent, or rapidly evolving. Industry-specific jargon, regional regulations, something that changed in the last year.
- One "default assumption" that outsiders to your field often get wrong. (Who the typical customer is. What a "standard" case looks like. Which tool people actually use vs. the one that gets press.)

Now run three probes:

- Probe 1: Coverage. Ask about one mainstream topic and one niche topic from your list. Compare the depth and accuracy. Pay attention to whether the AI signals uncertainty differently between the two, or whether both answers come with the same confident tone.
- Probe 2: Staleness. Ask about something you know has changed recently in your field: a regulation update, a tool release, a leadership change, a revised standard. Does the AI acknowledge the cutoff? Present stale information as current? Decline to answer? Note what happens.
- Probe 3: Default assumptions. Without naming your assumption directly, ask a question that would reveal whether the AI defaults to the outsider's view. For example, if your field's "standard" customer is different from what most people assume, ask the AI to describe the typical customer. Note what it treats as normal.

Go back to your task list and add a second annotation: for each task, flag whether you can lean on the model's knowledge, or whether you need to bring the knowledge yourself via context, documents, or search.

Stretch goal: Re-run the staleness probe with web search enabled. Compare what changes. This is retrieval in action.

## Lesson reflection

- What's one area of your work where you now realize you need to supply context rather than assume the model has it?
- Did the default-assumption probe surface anything that surprised you?

## What's next

Knowledge covers what the model absorbed during training. Working Memory covers what it's paying attention to right now: your prompt, your documents, your conversation. This property has the hardest edge of all four.

#### Feedback

As you progress through the course, we'd love to hear from you about how you are using concepts from the course in your work, plus any feedback you may have. Share your feedback here.

#### Acknowledgments and license

Copyright 2026 Anthropic. Original work building on the AI Fluency Framework developed by Prof. Rick Dakan (Ringling College of Art and Design) and Prof. Joseph Feller (University College Cork). Released under the CC BY-NC-SA 4.0 license.

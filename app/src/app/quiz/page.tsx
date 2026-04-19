"use client";

import { useState } from "react";
import { Brain, RotateCcw } from "lucide-react";
import QuizCard from "@/components/QuizCard";
import { EXAM_DOMAINS, QUIZ_QUESTIONS } from "@/lib/courses";

export default function QuizPage() {
  const [domainFilter, setDomainFilter] = useState<number | null>(null);

  const filtered = domainFilter
    ? QUIZ_QUESTIONS.filter((q) => q.domain === domainFilter)
    : QUIZ_QUESTIONS;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-[800px] mx-auto px-6 py-3 flex items-center gap-3">
          <Brain className="h-4 w-4 text-zinc-400" />
          <h1 className="text-sm font-semibold text-zinc-100">Practice Quiz</h1>
          <span className="text-xs text-zinc-600 ml-auto">
            {filtered.length} question{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-8">
        {/* Domain filter */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          <button
            onClick={() => setDomainFilter(null)}
            className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
              domainFilter === null
                ? "bg-zinc-700 border-zinc-500 text-zinc-100"
                : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
            }`}
          >
            All Exam Domains
          </button>
          {EXAM_DOMAINS.map((d) => (
            <button
              key={d.id}
              onClick={() => setDomainFilter(d.domain)}
              className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
                domainFilter === d.domain
                  ? "bg-zinc-700 border-zinc-500 text-zinc-100"
                  : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
              }`}
            >
              Domain {d.domain}
            </button>
          ))}
          <button
            onClick={() => setDomainFilter(null)}
            className="ml-auto flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </button>
        </div>

        {/* Quiz cards */}
        <p className="text-xs text-zinc-600 mb-4">
          This review bank stays mapped to the five CCA exam domains even though the main app catalog now tracks 17 captured courses.
        </p>
        <div className="space-y-3">
          {filtered.map((q, idx) => (
            <QuizCard key={q.id} question={q} index={idx} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-zinc-600 text-sm">
            No questions for this domain.
          </div>
        )}
      </div>
    </div>
  );
}

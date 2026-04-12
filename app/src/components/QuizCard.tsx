"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { QuizQuestion } from "@/lib/courses";
import { DOMAINS, DOMAIN_COLORS } from "@/lib/courses";

interface QuizCardProps {
  question: QuizQuestion;
  index: number;
}

export default function QuizCard({ question, index }: QuizCardProps) {
  const [revealed, setRevealed] = useState(false);
  const domain = DOMAINS.find((d) => d.domain === question.domain);
  const colors = domain ? (DOMAIN_COLORS[domain.color] ?? DOMAIN_COLORS["blue"]) : DOMAIN_COLORS["blue"];

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all ${
        revealed ? "border-zinc-700 bg-zinc-900" : "border-zinc-800 bg-zinc-900/60"
      }`}
    >
      {/* Question header */}
      <button
        onClick={() => setRevealed((r) => !r)}
        className="w-full flex items-start gap-3 p-4 text-left hover:bg-zinc-800/30 transition-colors"
      >
        {/* Number */}
        <span
          className="flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold text-white shrink-0 mt-0.5"
          style={{ backgroundColor: colors.hex }}
        >
          {index + 1}
        </span>

        <div className="flex-1 min-w-0">
          {/* Domain tag */}
          {domain && (
            <span
              className={`inline-block text-[10px] px-2 py-0.5 rounded-full mb-1.5 ${colors.badge}`}
            >
              Domain {question.domain} — {domain.title}
            </span>
          )}
          <p className="text-sm text-zinc-200 leading-relaxed">{question.question}</p>
        </div>

        <div className="shrink-0 text-zinc-600 mt-0.5">
          {revealed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {/* Answer */}
      {revealed && (
        <div className="px-4 pb-4">
          <div
            className="mt-1 p-3 rounded-lg text-sm text-zinc-300 leading-relaxed"
            style={{ backgroundColor: `${colors.hex}15`, borderLeft: `3px solid ${colors.hex}` }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest block mb-1.5" style={{ color: colors.hex }}>
              Answer
            </span>
            {question.answer}
          </div>
        </div>
      )}
    </div>
  );
}

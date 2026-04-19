"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, FileText, List } from "lucide-react";
import type { Course, Lesson } from "@/lib/courses";
import { COURSE_COLORS } from "@/lib/courses";
import { loadProgress, toggleLesson } from "@/lib/progress";

interface LessonListProps {
  domain: Course;
}

export default function LessonList({ domain }: LessonListProps) {
  const colors = COURSE_COLORS[domain.color] ?? COURSE_COLORS["blue"];
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const data = loadProgress();
    const domainCompleted: Record<string, boolean> = {};
    domain.lessons.forEach((lesson) => {
      domainCompleted[lesson.id] = !!data.completedLessons[`${domain.id}/${lesson.id}`];
    });
    setCompleted(domainCompleted);
  }, [domain.id, domain.lessons]);

  const handleToggle = (lesson: Lesson) => {
    toggleLesson(domain.id, lesson.id);
    setCompleted((prev) => ({ ...prev, [lesson.id]: !prev[lesson.id] }));
  };

  return (
    <div className="space-y-2">
      {domain.lessons.map((lesson, idx) => {
        const isDone = completed[lesson.id] ?? false;
        return (
          <button
            key={lesson.id}
            onClick={() => handleToggle(lesson)}
            className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
              isDone
                ? "bg-zinc-800/60 border-zinc-700"
                : "bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/40"
            }`}
          >
            {/* Lesson number */}
            <span className="text-[11px] text-zinc-600 w-5 text-center shrink-0 font-mono">
              {idx + 1}
            </span>

            {/* Check icon */}
            {isDone ? (
              <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: colors.hex }} />
            ) : (
              <Circle className="h-4 w-4 shrink-0 text-zinc-700" />
            )}

            {/* Title */}
            <span className={`flex-1 text-sm ${isDone ? "text-zinc-400 line-through" : "text-zinc-200"}`}>
              {lesson.title}
            </span>

            <div className="flex items-center gap-1 text-zinc-600 text-[11px] shrink-0">
              {lesson.source === "captured" ? <FileText className="h-3 w-3" /> : <List className="h-3 w-3" />}
              <span>{lesson.source === "captured" ? "note" : "outline"}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

import { GraduationCap, BookOpen } from "lucide-react";
import DomainGrid from "@/components/DomainGrid";
import { COURSES } from "@/lib/courses";

export default function Home() {
  const totalLessons = COURSES.reduce((sum, course) => sum + course.lessons.length, 0);
  const capturedLessons = COURSES.reduce(
    (sum, course) => sum + course.lessons.filter((lesson) => lesson.source === "captured").length,
    0
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Page header */}
      <div className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-3">
          <GraduationCap className="h-5 w-5" style={{ color: "var(--app-accent)" }} />
          <div>
            <h1 className="text-sm font-semibold text-zinc-100">CAC Course Library</h1>
            <p className="text-xs text-zinc-500">17 courses · {totalLessons} lessons · 15 CCA review questions</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Section title */}
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="h-4 w-4 text-zinc-400" />
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Course Catalog
          </h2>
        </div>

        <DomainGrid domains={COURSES} />

        {/* Bottom summary */}
        <div className="mt-10 pt-6 border-t border-zinc-800 grid grid-cols-3 gap-4">
          {[
            { label: "Courses", value: String(COURSES.length) },
            { label: "Lessons", value: String(totalLessons) },
            { label: "Captured Notes", value: String(capturedLessons) },
          ].map(({ label, value }) => (
            <div key={label} className="text-center p-4 bg-zinc-900 rounded-xl border border-zinc-800">
              <p className="text-2xl font-bold text-zinc-100" style={{ color: "var(--app-accent)" }}>
                {value}
              </p>
              <p className="text-xs text-zinc-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">How This Catalog Works</p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The app now reads the imported `courses/` material directly. Lessons marked as `note`
            have captured markdown in the repo; lessons marked as `outline` come from a course
            index where screenshots exist but the write-up is still pending.
          </p>
        </div>
      </div>
    </div>
  );
}

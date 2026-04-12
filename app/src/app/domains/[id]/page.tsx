import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { DOMAINS, DOMAIN_COLORS, getDomainById, getTotalMinutes } from "@/lib/courses";
import LessonList from "@/components/LessonList";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return DOMAINS.map((d) => ({ id: d.id }));
}

export default async function DomainPage({ params }: Props) {
  const { id } = await params;
  const domain = getDomainById(id);
  if (!domain) notFound();

  const colors = DOMAIN_COLORS[domain.color] ?? DOMAIN_COLORS["blue"];
  const totalMins = getTotalMinutes(domain);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-[800px] mx-auto px-6 py-3 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Courses
          </Link>
          <div className="h-4 w-px bg-zinc-800" />
          <div className="flex items-center gap-2">
            <span
              className="flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold text-white"
              style={{ backgroundColor: colors.hex }}
            >
              {domain.domain}
            </span>
            <span className="text-xs font-medium text-zinc-300 truncate">{domain.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-8">
        {/* Domain hero */}
        <div
          className={`p-6 rounded-2xl border border-l-4 ${colors.border} border-zinc-800 mb-8`}
          style={{ background: `${colors.hex}08` }}
        >
          <h1 className="text-xl font-bold text-zinc-100 mb-2">{domain.title}</h1>
          <p className="text-sm text-zinc-400 leading-relaxed mb-5">{domain.description}</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{domain.lessons.length} lessons</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Clock className="h-3.5 w-3.5" />
              <span>{totalMins} minutes total</span>
            </div>
          </div>
        </div>

        {/* Lessons */}
        <div className="mb-3 flex items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Lessons</p>
          <span className="text-xs text-zinc-700">— click to mark complete</span>
        </div>
        <LessonList domain={domain} />

        {/* Next domain link */}
        <div className="mt-8 pt-6 border-t border-zinc-800">
          {(() => {
            const nextDomain = DOMAINS.find((d) => d.domain === domain.domain + 1);
            if (!nextDomain) return null;
            const nextColors = DOMAIN_COLORS[nextDomain.color] ?? DOMAIN_COLORS["blue"];
            return (
              <Link
                href={`/domains/${nextDomain.id}`}
                className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all group"
              >
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-0.5">Next Domain</p>
                  <p className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">
                    {nextDomain.title}
                  </p>
                </div>
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold text-white shrink-0"
                  style={{ backgroundColor: nextColors.hex }}
                >
                  {nextDomain.domain}
                </span>
              </Link>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MessageSquare, Terminal, Bot, Plug, FolderOpen,
  Clock, ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Domain } from "@/lib/courses";
import { DOMAIN_COLORS, getTotalMinutes } from "@/lib/courses";
import { getDomainProgress } from "@/lib/progress";

const ICON_MAP: Record<string, React.ElementType> = {
  MessageSquare,
  Terminal,
  Bot,
  Plug,
  FolderOpen,
};

interface DomainCardProps {
  domain: Domain;
}

export default function DomainCard({ domain }: DomainCardProps) {
  const [progress, setProgress] = useState(0);
  const colors = DOMAIN_COLORS[domain.color] ?? DOMAIN_COLORS["blue"];
  const Icon = ICON_MAP[domain.icon] ?? MessageSquare;
  const totalMins = getTotalMinutes(domain);

  useEffect(() => {
    setProgress(getDomainProgress(domain.id, domain.lessons.length));
  }, [domain.id, domain.lessons.length]);

  return (
    <Link
      href={`/domains/${domain.id}`}
      className={`group relative flex flex-col bg-zinc-900 border border-zinc-800 border-l-4 ${colors.border} rounded-xl overflow-hidden hover:border-zinc-600 hover:shadow-xl hover:shadow-black/40 transition-all duration-200 hover:scale-[1.01]`}
    >
      {/* Header */}
      <div className="p-5 flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Domain number badge */}
            <div
              className="flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold text-white shrink-0"
              style={{ backgroundColor: colors.hex }}
            >
              {domain.domain}
            </div>
            {/* Icon */}
            <Icon className={`h-4.5 w-4.5 shrink-0 ${colors.text}`} style={{ width: "1.125rem", height: "1.125rem" }} />
          </div>
          <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0 mt-0.5" />
        </div>

        <h3 className="text-sm font-semibold text-zinc-100 mb-2 leading-snug">
          {domain.title}
        </h3>
        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
          {domain.description}
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant={domain.color as "blue" | "orange" | "purple" | "teal" | "pink"} className="text-[10px]">
            {domain.lessons.length} lessons
          </Badge>
          <div className="flex items-center gap-1 text-zinc-600 text-[10px]">
            <Clock className="h-3 w-3" />
            <span>{totalMins}min</span>
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-zinc-600">Progress</span>
            <span className="text-[10px] text-zinc-500">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: colors.hex }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

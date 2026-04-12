"use client";
import Link from "next/link";
import { GraduationCap, Keyboard } from "lucide-react";
import { useSettings, ACCENT_PRESETS } from "@/lib/settings";

export default function AppFooter() {
  const { settings } = useSettings();
  const leftOffset = settings.navCollapsed ? 52 : 180;
  const accentName = ACCENT_PRESETS[settings.accentColor].name;

  return (
    <div
      className="fixed bottom-0 right-0 z-[100] border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-sm transition-[left] duration-200"
      style={{ left: `${leftOffset}px` }}
    >
      <div className="max-w-[1800px] mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left: app name */}
        <div className="flex items-center gap-2">
          <GraduationCap className="h-3.5 w-3.5" style={{ color: "var(--app-accent)" }} />
          <span className="text-xs text-zinc-500">CCA Study App</span>
          <span className="text-zinc-700">·</span>
          <span className="text-xs" style={{ color: "var(--app-accent-light)" }}>
            {accentName}
          </span>
        </div>

        {/* Right: keyboard hint */}
        <div className="flex items-center gap-2 text-xs text-zinc-600">
          <Keyboard className="h-3 w-3" />
          <span>
            <Link href="/settings" className="hover:text-zinc-400 transition-colors">
              Settings
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

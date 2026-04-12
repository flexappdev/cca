import coursesData from "@/data/courses.json";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
}

export interface Domain {
  id: string;
  title: string;
  domain: number;
  color: string;
  icon: string;
  description: string;
  lessons: Lesson[];
}

export interface QuizQuestion {
  id: number;
  domain: number;
  question: string;
  answer: string;
}

export const DOMAINS: Domain[] = coursesData as Domain[];

export function getDomainById(id: string): Domain | undefined {
  return DOMAINS.find((d) => d.id === id);
}

export function getTotalMinutes(domain: Domain): number {
  return domain.lessons.reduce((sum, lesson) => {
    const mins = parseInt(lesson.duration.replace("min", ""), 10);
    return sum + (isNaN(mins) ? 0 : mins);
  }, 0);
}

export function getLessonMinutes(lesson: Lesson): number {
  const mins = parseInt(lesson.duration.replace("min", ""), 10);
  return isNaN(mins) ? 0 : mins;
}

export const DOMAIN_COLORS: Record<string, { hex: string; bg: string; border: string; text: string; badge: string }> = {
  blue:   { hex: "#3b82f6", bg: "bg-blue-900/20",   border: "border-l-blue-500",   text: "text-blue-400",   badge: "bg-blue-900/60 text-blue-300" },
  orange: { hex: "#f59e0b", bg: "bg-amber-900/20",  border: "border-l-amber-500",  text: "text-amber-400",  badge: "bg-amber-900/60 text-amber-300" },
  purple: { hex: "#a855f7", bg: "bg-purple-900/20", border: "border-l-purple-500", text: "text-purple-400", badge: "bg-purple-900/60 text-purple-300" },
  teal:   { hex: "#14b8a6", bg: "bg-teal-900/20",   border: "border-l-teal-500",   text: "text-teal-400",   badge: "bg-teal-900/60 text-teal-300" },
  pink:   { hex: "#ec4899", bg: "bg-pink-900/20",   border: "border-l-pink-500",   text: "text-pink-400",   badge: "bg-pink-900/60 text-pink-300" },
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Domain 1
  {
    id: 1,
    domain: 1,
    question: "Which element of a system prompt takes lowest precedence when instructions conflict?",
    answer: "Content later in the context window / human turn instructions typically lose to system prompt",
  },
  {
    id: 2,
    domain: 1,
    question: "When should you use extended thinking vs standard response?",
    answer: "Complex multi-step reasoning problems where showing work matters",
  },
  {
    id: 3,
    domain: 1,
    question: "What is prefilling the assistant turn used for?",
    answer: "Forcing output format, skipping preamble, resuming partial responses",
  },
  // Domain 2
  {
    id: 4,
    domain: 2,
    question: "What are the 4 types of Claude Code memory?",
    answer: "user, feedback, project, reference",
  },
  {
    id: 5,
    domain: 2,
    question: "Which hook type runs before a tool is executed?",
    answer: "PreToolUse hook",
  },
  {
    id: 6,
    domain: 2,
    question: "What file configures Claude Code's project-level instructions?",
    answer: "CLAUDE.md",
  },
  // Domain 3
  {
    id: 7,
    domain: 3,
    question: "When should you use a subagent instead of a direct tool call?",
    answer: "Multi-step tasks requiring their own agent loop, or when context isolation is needed",
  },
  {
    id: 8,
    domain: 3,
    question: "What is the benefit of parallel tool calls?",
    answer: "Reduced latency — independent operations run simultaneously",
  },
  {
    id: 9,
    domain: 3,
    question: "In an orchestrator/worker pattern, what does the orchestrator do?",
    answer: "Plans and coordinates; delegates subtasks to worker subagents",
  },
  // Domain 4
  {
    id: 10,
    domain: 4,
    question: "What are the 3 components of MCP architecture?",
    answer: "Host (Claude Code), Client (manages connection), Server (provides tools/resources)",
  },
  {
    id: 11,
    domain: 4,
    question: "What transport types does MCP support?",
    answer: "stdio (subprocess) and SSE (HTTP Server-Sent Events)",
  },
  {
    id: 12,
    domain: 4,
    question: "What format must MCP tool input schemas use?",
    answer: "JSON Schema",
  },
  // Domain 5
  {
    id: 13,
    domain: 5,
    question: "What is the difference between a Skill and a Hook?",
    answer: "Skills are agent-invocable workflows (markdown prompts); Hooks run as shell scripts outside the agent loop",
  },
  {
    id: 14,
    domain: 5,
    question: "What does plan mode (EnterPlanMode) prevent Claude from doing?",
    answer: "Making any file changes — read-only exploration for architectural decisions",
  },
  {
    id: 15,
    domain: 5,
    question: "What are the 6 Claude Code extensions?",
    answer: "CLAUDE.md, Skills, MCP, Subagents, Hooks, Plugins/Marketplaces",
  },
];

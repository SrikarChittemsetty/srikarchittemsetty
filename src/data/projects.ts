export type Project = {
  icon: string;
  name: string;
  description: string;
  href: string;
  year: string;
  status: string;
  image: string;
  tags: string[];
  why: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    icon: "🌐",
    name: "Personal Ecosystem Portfolio",
    description:
      "A Next.js portfolio that connects project galleries, VoicePress-powered writing, a curated Shelf, dark mode, and an optional interactive House explorer into one personal platform.",
    why:
      "Built to turn a personal website into a living ecosystem for projects, writing, experiments, and tools instead of a static resume page.",
    href: "https://github.com/SrikarChittemsetty/engineering-portfolio",
    year: "2026",
    status: "Built",
    image: "/projects/personal-ecosystem-portfolio.svg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "API Integration"],
    featured: true,
  },
  {
    icon: "📝",
    name: "VoicePress",
    description:
      "Voice-enabled blogging platform for drafting and publishing posts with Markdown, authentication, comments, likes, bookmarks, and a public posts API.",
    why:
      "Built to explore how personal publishing tools can become part of a larger portfolio/blog ecosystem instead of living as isolated apps.",
    href: "https://github.com/SrikarChittemsetty/voicepress",
    year: "2026",
    status: "Built",
    image: "/projects/voicepress.svg",
    tags: ["Flask", "SQLite", "Markdown", "Auth", "Testing"],
    featured: true,
  },
  {
    icon: "🧩",
    name: "Modular Context Abstraction",
    description:
      "LLM tooling prototype that transforms unstructured text into modular context blocks for cleaner prompt composition and reusable AI workflows.",
    why:
      "Built around a practical question: how can messy notes and source material become structured context that is easier to reuse, inspect, and evolve?",
    href: "https://github.com/SrikarChittemsetty/modular-context-abstraction",
    year: "2026",
    status: "Prototype",
    image: "/projects/modular-context.svg",
    tags: ["Python", "LLMs", "Context", "Tooling"],
    featured: false,
  },
];

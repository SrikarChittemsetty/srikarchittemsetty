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
      "A Next.js portfolio platform that unifies project case studies, in-repo writing, a curated Shelf, and an optional Mind Map in one personal system.",
    why:
      "Built to turn a personal site into a living ecosystem for projects, writing, experiments, and tools instead of a static resume page.",
    href: "https://github.com/SrikarChittemsetty/srikarchittemsetty",
    year: "2026",
    status: "Built",
    image: "/projects/personal-ecosystem-portfolio.svg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Portfolio"],
    featured: true,
  },
  {
    icon: "💳",
    name: "SubHub",
    description:
      "Full-stack subscription tracking MVP for monitoring recurring spend, upcoming renewals, and user-reviewed subscription data.",
    why:
      "Built to solve a real personal-finance workflow while practicing authenticated data ownership, database-backed CRUD, and product-quality dashboard design. Gmail discovery is experimental and still being hardened.",
    href: "https://github.com/SrikarChittemsetty/subhub",
    year: "2026",
    status: "MVP",
    image: "/projects/subhub.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth"],
    featured: true,
  },
  {
    icon: "🧩",
    name: "Modular Context Abstraction",
    description:
      "Streamlit prototype that extracts messy AI collaboration transcripts into reusable context modules and assembles transfer prompts under token and privacy constraints.",
    why:
      "Built to make long-running AI workflows easier to resume, audit, and hand off without copying entire conversations or leaking private context.",
    href: "https://github.com/SrikarChittemsetty/modular-context-abstraction",
    year: "2026",
    status: "Prototype",
    image: "/projects/modular-context.svg",
    tags: ["Python", "Streamlit", "OpenAI API", "Context Engineering"],
    featured: true,
  },
  {
    icon: "📝",
    name: "VoicePress",
    description:
      "Flask blogging platform with voice-assisted drafting, Markdown publishing, authentication, comments, likes, bookmarks, and a public posts API.",
    why:
      "Built to explore how a standalone writing tool can integrate cleanly into a broader portfolio ecosystem instead of living as an isolated app.",
    href: "https://github.com/SrikarChittemsetty/voicepress",
    year: "2026",
    status: "Built",
    image: "/projects/voicepress.svg",
    tags: ["Flask", "SQLite", "Markdown", "Auth", "Testing"],
    featured: true,
  },
  {
    icon: "🧠",
    name: "LeetCode Log",
    description:
      "Public practice journal with solved interview problems, final Python solutions, pitfalls, complexity notes, and reusable mental models.",
    why:
      "Built to make algorithm practice inspectable: not just final answers, but how mistakes, patterns, and interview triggers get turned into repeatable judgment.",
    href: "https://github.com/SrikarChittemsetty/leetcode-log",
    year: "2026",
    status: "Active",
    image: "/projects/personal-ecosystem-portfolio.svg",
    tags: ["Python", "Algorithms", "Interview Prep", "Writing"],
    featured: false,
  },
];

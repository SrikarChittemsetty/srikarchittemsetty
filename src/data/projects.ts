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
      "A Next.js portfolio platform that unifies project case studies, VoicePress-backed writing, a curated Shelf, and an optional interactive House explorer in one personal system.",
    why:
      "Built to turn a personal site into a living ecosystem for projects, writing, experiments, and tools instead of a static resume page.",
    href: "https://github.com/SrikarChittemsetty/engineering-portfolio",
    year: "2026",
    status: "Built",
    image: "/projects/personal-ecosystem-portfolio.svg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "API Integration"],
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
    status: "In progress",
    image: "/projects/subhub.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth"],
    featured: false,
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
];

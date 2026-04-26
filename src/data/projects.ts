export type Project = {
  icon: string;
  name: string;
  description: string;
  href: string;
  year: string;
  status: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    icon: "📝",
    name: "VoicePress",
    description:
      "Flask + SQLite blogging platform with Markdown writing, public/private posts, comments, likes, bookmarks, and browser voice dictation.",
    href: "https://github.com/SrikarChittemsetty/voicepress",
    year: "2026",
    status: "Built",
    image: "/projects/voicepress.jpg",
    tags: ["Flask", "SQLite", "Markdown", "Auth", "Testing"],
    featured: true,
  },
  {
    icon: "🧩",
    name: "Modular Context Abstraction",
    description:
      "Prototype for transforming unstructured text into modular, reusable context for LLM workflows.",
    href: "https://github.com/SrikarChittemsetty/modular-context-abstraction",
    year: "2026",
    status: "Prototype",
    image: "/projects/modular-context.jpg",
    tags: ["Python", "LLMs", "Context", "Tooling"],
    featured: true,
  },
];

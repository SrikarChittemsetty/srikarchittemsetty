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
    icon: "⚓",
    name: "Hapax",
    description:
      "A crash-durable task store for AI agents that guarantees a side effect happens exactly once, even under kill -9 at any point. 500 randomized crashes produced 0 double charges; a naive implementation under the identical harness produced 121.",
    why:
      "Built because the MCP Tasks spec defines a store interface and ships only an in-memory implementation, leaving persistence to implementers — and an agent that charges a card twice is a real failure rather than a theoretical one. Peak 4,949 tasks/s, with the ceiling traced to Postgres's commit path by elimination and confirmed by a Go port that hit the same limit.",
    href: "https://github.com/SrikarChittemsetty/hapax",
    year: "2026",
    status: "Built",
    image: "/projects/hapax.svg",
    tags: ["Python", "Go", "PostgreSQL", "Distributed Systems", "OpenTelemetry"],
    featured: true,
  },
  {
    icon: "⚖️",
    name: "Aporia",
    description:
      "Semantic search over primary-source philosophy that classifies whether a passage argues for or against a claim, not merely whether it is about the topic. On a held-out set written after the fix, 20 of 21 queries surfaced the philosopher who actually holds the position.",
    why:
      "Built after finding that embedding search matches vocabulary and imagery rather than the conclusion an argument reaches — so a query about free will returns everyone who mentions it, on either side, undifferentiated. Fixed with HyDE query expansion over a from-scratch HNSW index, and validated on queries written afterwards so the result could not be tuned into existence.",
    href: "https://github.com/SrikarChittemsetty/aporia",
    year: "2026",
    status: "Built",
    image: "/projects/aporia.svg",
    tags: ["Python", "FastAPI", "Next.js", "TypeScript", "Vector Search"],
    featured: true,
  },
  {
    icon: "🧯",
    name: "Peras",
    description:
      "A metrics ingest pipeline that survives the label explosion that OOM-kills a naive one — proven by exit code. Same 20M-sample workload in the same 256 MB container: the naive ingester dies at 8M samples; Peras completes all 20M at 1.67M samples/s with ~3 MB of heap.",
    why:
      "Built after measuring, while instrumenting Hapax, what one high-cardinality label costs: adding task_id took an export from 22 series to 30,019 and the payload up 1,488x. Peras is the ingest-side defense — it attributes a breach to the exploding label dimension at runtime and aggregates it away instead of crashing, and CI re-proves the die-vs-survive contrast on every push.",
    href: "https://github.com/SrikarChittemsetty/peras",
    year: "2026",
    status: "Built",
    image: "/projects/peras.svg",
    tags: ["Go", "gRPC", "OpenTelemetry", "Kubernetes", "Observability"],
    featured: true,
  },
  {
    icon: "🌐",
    name: "Personal Ecosystem Portfolio",
    description:
      "This site: a Next.js portfolio with project case studies, an open-source contribution record, a Git-backed activity journal, and a curated Shelf.",
    why:
      "Built to turn a personal site into a living ecosystem for projects, writing, experiments, and tools instead of a static resume page.",
    href: "https://github.com/SrikarChittemsetty/srikarchittemsetty",
    year: "2026",
    status: "Built",
    image: "/projects/personal-ecosystem-portfolio.svg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Portfolio"],
    featured: false,
  },
];

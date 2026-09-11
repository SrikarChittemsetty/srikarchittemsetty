export type Experience = {
  company: string;
  tagline: string;
  role: string;
  team?: string;
  location: string;
  start: string;
  end: string;
  href: string;
  logo: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "ForkLaunch",
    tagline: "TypeScript backend framework + deployment platform",
    role: "Software Engineering Intern",
    team: "Infrastructure & Platform",
    location: "San Francisco, CA",
    start: "Jun 2026",
    end: "Present",
    href: "https://forklaunch.com",
    logo: "/experience/forklaunch.svg",
    summary:
      "I own observability, reliability, and availability for the platform: the health metrics, the Redis-backed BullMQ queue behind ranked issues and alerts, and the tools that make a failed deploy readable.",
    highlights: [
      "Shipped 51 pull requests and 36,000 lines to production in three months across the observability and ecommerce surfaces.",
      "Built a Rust command line for live logs and metrics, and a monitoring dashboard with a drag-to-explain latency heatmap, trace waterfall, and cmd-K search.",
      "Took the ecommerce module to production, catalog through checkout: 31 REST endpoints, 8 tables, Stripe, PayPal, and Stripe Connect, duplicate-proof webhooks, and a guard against double-sold items.",
      "Root-caused silent production failures, including an out-of-memory crash loop and orders left unpaid at checkout; caught a broken access control flaw reviewing 30 teammate pull requests.",
    ],
    tech: ["TypeScript", "Rust", "PostgreSQL", "Redis", "BullMQ", "OpenTelemetry", "Stripe"],
  },
];

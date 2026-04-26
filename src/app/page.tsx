import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";

const projectItems = [
  {
    icon: "📝",
    name: "VoicePress",
    description:
      "Flask + SQLite blogging platform with Markdown writing, public/private posts, comments, likes, bookmarks, and browser voice dictation.",
    href: "https://github.com/SrikarChittemsetty/voicepress",
    year: "2026",
  },
  {
    icon: "🧩",
    name: "Modular Context Abstraction",
    description:
      "Prototype for transforming unstructured text into modular, reusable context for LLM workflows.",
    href: "https://github.com/SrikarChittemsetty/modular-context-abstraction",
    year: "2026",
  },
];

const portalLinks = [
  { label: "Projects", href: "#" },
  { label: "Shelf", href: "/shelf" },
];

function Header() {
  return (
    <header className="flex items-start justify-between gap-6">
      <h1 className="text-[30px] font-bold tracking-tight text-neutral-950 sm:text-[32px]">
        Your Full Name
      </h1>
      <nav className="flex items-center gap-4 pt-1 text-neutral-900">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70"
        >
          <FaGithub size={16} />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70"
        >
          <FaLinkedin size={16} />
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70"
        >
          <FaXTwitter size={16} />
        </a>
        <a
          href="mailto:your.email@example.com"
          aria-label="Email"
          className="rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70"
        >
          <Mail size={16} />
        </a>
      </nav>
    </header>
  );
}

function Intro() {
  return (
    <section className="space-y-6">
      <p className="max-w-3xl text-lg leading-8 text-neutral-700">
        I am an engineering student focused on building dependable systems across software and
        hardware. I enjoy translating messy real-world problems into clear requirements, prototypes,
        and measurable outcomes. My current interests include embedded systems, developer tooling,
        and practical product engineering.
      </p>
      <a
        href="#builds"
        className="inline-flex rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-700"
      >
        View Projects
      </a>
    </section>
  );
}

function WorkList() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-950">Work</h2>
        <a href="#" className="text-sm text-neutral-600 transition-all duration-200 hover:text-neutral-900">
          Resume
        </a>
      </div>
      <div className="border-y border-neutral-200">
        <div className="px-2 py-4 text-sm leading-6 text-neutral-600">
          Internship, research, and project-based experience will appear here as I add it.
        </div>
      </div>
    </section>
  );
}

function ProjectList() {
  return (
    <section id="builds" className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-950">Builds</h2>
      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {projectItems.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[auto_1fr] gap-4 px-2 py-4 transition-all duration-200 hover:bg-black/[0.02] sm:grid-cols-[auto_1fr_auto] sm:items-center"
          >
            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-sm">
              {project.icon}
            </div>
            <div className="min-w-0">
              <h3 className="font-medium text-neutral-900">{project.name}</h3>
              <p className="mt-1 text-sm leading-6 text-neutral-600">{project.description}</p>
            </div>
            <p className="text-sm text-neutral-500 sm:ml-6">{project.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function ExploreLinks() {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">Explore</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {portalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group flex items-center justify-between rounded-2xl bg-neutral-100 px-6 py-7 text-neutral-900 transition-all duration-200 hover:bg-neutral-200/80"
          >
            <span className="text-xl font-semibold tracking-tight">{link.label}</span>
            <span
              aria-hidden="true"
              className="text-lg text-neutral-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-neutral-900"
            >
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-14 px-6 py-12 sm:py-16">
        <Header />
        <Intro />
        <WorkList />
        <ProjectList />
        <ExploreLinks />
      </main>
    </div>
  );
}

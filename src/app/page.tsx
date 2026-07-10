import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ScanEye } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { openSourceContributions } from "@/data/open-source";
import ThemeToggle from "@/components/theme-toggle";

const featuredProjects = projects.filter((project) => project.featured);
const latestOpenSourceContribution = openSourceContributions[0];

const portalLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Activity", href: "/activity" },
  { label: "Shelf", href: "/shelf" },
  { label: "Mind Map", href: "/house" },
];

function Header() {
  return (
    <header className="flex items-center justify-between gap-6">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100 sm:text-[32px]">
        Srikar Chittemsetty
      </h1>
      <nav className="flex items-center gap-3 text-neutral-900 dark:text-neutral-100">
        <a
          href="https://github.com/SrikarChittemsetty"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70 dark:hover:bg-white/10 dark:hover:text-neutral-300"
        >
          <FaGithub size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/srikar-c"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70 dark:hover:bg-white/10 dark:hover:text-neutral-300"
        >
          <FaLinkedin size={16} />
        </a>
        <a
          href="mailto:chittemsettys@uchicago.edu"
          aria-label="Email"
          className="rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70 dark:hover:bg-white/10 dark:hover:text-neutral-300"
        >
          <Mail size={16} />
        </a>
        <Link
          href="/house"
          aria-label="Open Mind Map portfolio map"
          className="rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70 dark:hover:bg-white/10 dark:hover:text-neutral-300"
        >
          <ScanEye size={16} />
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

function Intro() {
  return (
    <section className="space-y-5">
      <p className="max-w-3xl text-base leading-7 text-neutral-700 dark:text-neutral-300 sm:text-lg sm:leading-8">
        Welcome! I&apos;m Srikar, an engineer at the University of Chicago. This is a comprehensive
        account of my work, active and past, and a window into how I think through projects,
        systems, and ideas.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#builds"
          className="inline-flex rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
        >
          View Projects
        </a>
        <Link
          href="/house"
          aria-label="Open Mind Map portfolio map"
          className="inline-flex rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
        >
          Mind Map
        </Link>
      </div>
    </section>
  );
}

function ProjectList() {
  return (
    <section id="builds" className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
        Featured Projects
      </h2>
      <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {featuredProjects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[auto_1fr] gap-4 px-2 py-4 transition-all duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] sm:grid-cols-[auto_1fr_auto] sm:items-center"
          >
            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-sm dark:bg-neutral-800">
              {project.icon}
            </div>
            <div className="min-w-0">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{project.name}</h3>
              <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{project.description}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                {project.tags.slice(0, 4).join(" / ")}
              </p>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 sm:ml-6">{project.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function ExploreLinks() {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        Explore
      </h2>
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {portalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group flex items-center justify-between rounded-lg bg-neutral-100 px-3.5 py-3.5 text-neutral-900 transition-all duration-200 hover:bg-neutral-200/80 sm:px-4 sm:py-4 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
          >
            <span className="text-sm font-semibold tracking-tight sm:text-base">{link.label}</span>
            <span
              aria-hidden="true"
              className="text-sm text-neutral-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100"
            >
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function OpenSourcePreview() {
  if (!latestOpenSourceContribution) {
    return null;
  }

  return (
    <section className="space-y-2">
      <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        Open Source
      </h2>
      <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
        Merged public contributions to external developer tools and SDKs.
      </p>
      <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        <div className="flex flex-col gap-2 px-2 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="min-w-0 space-y-1">
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {latestOpenSourceContribution.title}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              {latestOpenSourceContribution.repository}
            </p>
          </div>
          <a
            href={latestOpenSourceContribution.prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-700 transition-all duration-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          >
            View PR
          </a>
        </div>
      </div>
      <Link
        href="/projects"
        className="inline-flex text-sm text-neutral-600 transition-all duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        View all projects
      </Link>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <Header />
        <Intro />
        <ProjectList />
        <OpenSourcePreview />
        <ExploreLinks />
      </main>
    </div>
  );
}

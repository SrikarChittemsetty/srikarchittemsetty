import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { projects } from "@/data/projects";
import ThemeToggle from "@/components/theme-toggle";

const featuredProjects = projects.filter((project) => project.featured);

const portalLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Shelf", href: "/shelf" },
  { label: "Blog", href: "/blog" },
];

function Header() {
  return (
    <header className="flex items-start justify-between gap-6">
      <h1 className="text-[30px] font-bold tracking-tight text-neutral-950 dark:text-neutral-100 sm:text-[32px]">
        Srikar Chittemsetty
      </h1>
      <nav className="flex items-center gap-4 pt-1 text-neutral-900 dark:text-neutral-100">
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
        <ThemeToggle />
      </nav>
    </header>
  );
}

function Intro() {
  return (
    <section className="space-y-6">
      <p className="max-w-3xl text-lg leading-8 text-neutral-700 dark:text-neutral-300">
        I&apos;m Srikar, an engineer at the University of Chicago. I build what I use and use
        what I build—growing a personal ecosystem of tools as needs arise. I explore ideas in and
        out of code and document my thoughts as my work evolves, along with reflections on life and
        beyond. You&apos;ll find it all here.
      </p>
      <a
        href="#builds"
        className="inline-flex rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
      >
        View Projects
      </a>
    </section>
  );
}

function WorkList() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">Work</h2>
      <div className="border-y border-neutral-200 dark:border-neutral-800">
        <div className="px-2 py-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          Internship, research, and project-based experience will appear here as I add it.
        </div>
      </div>
    </section>
  );
}

function ProjectList() {
  return (
    <section id="builds" className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">Builds</h2>
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
    <section className="space-y-4">
      <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Explore</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group flex items-center justify-between rounded-2xl bg-neutral-100 px-6 py-7 text-neutral-900 transition-all duration-200 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
          >
            <span className="text-xl font-semibold tracking-tight">{link.label}</span>
            <span
              aria-hidden="true"
              className="text-lg text-neutral-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100"
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
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
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

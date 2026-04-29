import { FaGithub, FaLinkedin } from "react-icons/fa";
import { House, Mail } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ThemeToggle from "@/components/theme-toggle";

const featuredProjects = projects.filter((project) => project.featured);

const portalLinks = [
  { label: "Garage", href: "/projects" },
  { label: "Study", href: "/blog" },
  { label: "Shelf", href: "/shelf" },
  { label: "House", href: "/house" },
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
          aria-label="Virtual House"
          className="rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70 dark:hover:bg-white/10 dark:hover:text-neutral-300"
        >
          <House size={16} />
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
        I&apos;m Srikar Chittemsetty, an engineer at the University of Chicago. I build practical
        software products from first principles, with a focus on useful interfaces, reliable
        systems, and fast iteration. This portfolio highlights my projects, writing, and ongoing
        experiments.
      </p>
      <a
        href="#builds"
        className="inline-flex rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
      >
        View Builds
      </a>
    </section>
  );
}

function ProjectList() {
  return (
    <section id="builds" className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">Featured Builds</h2>
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
    <section className="space-y-3">
      <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Explore</h2>
      <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
        Use the house metaphor to move through the site: Garage for tools and systems, Study for
        writing, Shelf for media, and House for the interactive map.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {portalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group flex items-center justify-between rounded-lg bg-neutral-100 px-6 py-7 text-neutral-900 transition-all duration-200 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
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
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <Header />
        <Intro />
        <ProjectList />
        <ExploreLinks />
      </main>
    </div>
  );
}

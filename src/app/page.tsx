import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { openSourceContributions } from "@/data/open-source";
import ThemeToggle from "@/components/theme-toggle";
import { SECTIONS_LIVE } from "@/lib/feature-flags";
import { getAllActivity, type ActivityEntry } from "@/lib/activity-content";

const featuredProjects = projects.filter((project) => project.featured);
const mergedOpenSourceContributions = openSourceContributions.filter((c) => c.status === "Merged");

const navLinks = [
  { label: "Activity", href: "/activity", live: SECTIONS_LIVE.activity },
  { label: "Projects", href: "/projects", live: SECTIONS_LIVE.projects },
  { label: "Shelf", href: "/shelf", live: SECTIONS_LIVE.shelf },
  { label: "Mind Map", href: "/house", live: SECTIONS_LIVE.house },
].filter((link) => link.live);

const socialLinks = [
  { label: "GitHub", href: "https://github.com/SrikarChittemsetty", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/srikar-c", Icon: FaLinkedin },
  { label: "Email", href: "mailto:chittemsettys@uchicago.edu", Icon: Mail },
];

const iconLinkClassName =
  "rounded-md p-1 transition-all duration-200 hover:bg-black/5 hover:text-black/70 dark:hover:bg-white/10 dark:hover:text-neutral-300";

const textLinkClassName =
  "text-sm text-neutral-600 transition-all duration-200 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">
      {children}
    </h2>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between gap-6">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100 sm:text-[32px]">
        Srikar Chittemsetty
      </h1>
      <nav aria-label="Primary" className="flex items-center gap-4">
        <ul className="hidden items-center gap-4 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={textLinkClassName}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 text-neutral-900 dark:text-neutral-100">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className={iconLinkClassName}
            >
              <Icon size={16} />
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function Intro() {
  return (
    <section>
      <p className="max-w-3xl text-base leading-7 text-neutral-700 dark:text-neutral-300 sm:text-lg sm:leading-8">
        I study computational &amp; applied math and philosophy at the University of Chicago,
        and I&apos;m a software engineer on the infrastructure &amp; platform team at{" "}
        <a
          href="https://forklaunch.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-all duration-200 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-100"
        >
          ForkLaunch
        </a>
        . I build systems that stay correct when things fail: exactly-once execution, retrieval
        that can be measured, ingest that survives overload.
      </p>
    </section>
  );
}

function formatShortDate(value: string) {
  const date = new Date(value + "T12:00:00");
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date);
}

function NowSection({ entries }: { entries: ActivityEntry[] }) {
  if (!SECTIONS_LIVE.activity || entries.length === 0) {
    return null;
  }

  return (
    <section id="now" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <SectionLabel>Now</SectionLabel>
        <Link href="/activity" className={textLinkClassName}>
          All updates →
        </Link>
      </div>
      <ul className="space-y-3">
        {entries.map((entry) => {
          const heading = entry.title ?? entry.link;
          return (
            <li key={entry.slug} className="flex gap-4 text-sm leading-6">
              <time dateTime={entry.date} className="w-14 shrink-0 text-neutral-500 dark:text-neutral-500">
                {formatShortDate(entry.date)}
              </time>
              <p className="min-w-0 text-neutral-700 dark:text-neutral-300">
                {heading ? (
                  entry.link ? (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-all duration-200 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-100"
                    >
                      {heading}
                    </a>
                  ) : (
                    heading
                  )
                ) : null}
                {heading && entry.note ? " — " : null}
                {entry.note}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ExperienceSection() {
  if (experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="space-y-4">
      <SectionLabel>Experience</SectionLabel>
      <div className="space-y-4">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.start}`}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700 sm:p-6"
          >
            <div className="flex items-center gap-4">
              <a
                href={job.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${job.company} website`}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white p-2.5 transition-all duration-200 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"
              >
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={40}
                  height={25}
                  className="h-auto w-10"
                />
              </a>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                      <a
                        href={job.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:text-neutral-600 dark:hover:text-neutral-300"
                      >
                        {job.company}
                      </a>
                    </h3>
                    <p className="mt-0.5 text-sm text-neutral-700 dark:text-neutral-300">
                      {job.role}
                      {job.team ? <span className="text-neutral-500 dark:text-neutral-500">, {job.team}</span> : null}
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500">{job.tagline}</p>
                  </div>
                  <p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-500 sm:pt-1">
                    {job.start} – {job.end}
                    <span className="hidden sm:inline"> · {job.location}</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{job.summary}</p>

            <ul className="mt-3 space-y-2">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300"
                >
                  <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {job.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectList() {
  if (!SECTIONS_LIVE.projects) {
    return null;
  }

  return (
    <section id="projects" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <SectionLabel>Projects</SectionLabel>
        <Link href="/projects" className={textLinkClassName}>
          All projects →
        </Link>
      </div>
      <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {featuredProjects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block px-2 py-4 transition-all duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {project.name}
                <span
                  aria-hidden="true"
                  className="ml-1.5 inline-block text-neutral-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-neutral-900 dark:text-neutral-600 dark:group-hover:text-neutral-100"
                >
                  ↗
                </span>
              </h3>
              <p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-500">{project.year}</p>
            </div>
            <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{project.description}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
              {project.tags.slice(0, 4).join(" / ")}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function OpenSourcePreview() {
  if (mergedOpenSourceContributions.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <SectionLabel>Open Source</SectionLabel>
        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          Merged pull requests to Kubernetes, OpenTelemetry, and Microsoft projects.
        </p>
      </div>
      <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {mergedOpenSourceContributions.map((contribution) => (
          <a
            key={contribution.prUrl}
            href={contribution.prUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 px-2 py-3 transition-all duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <p className="min-w-0 text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {contribution.title}
            </p>
            <p className="shrink-0 font-mono text-xs text-neutral-500 transition-all duration-200 group-hover:text-neutral-900 dark:text-neutral-500 dark:group-hover:text-neutral-100">
              {contribution.repository}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Srikar Chittemsetty</p>
      <ul className="flex items-center gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={textLinkClassName}>
              {link.label}
            </Link>
          </li>
        ))}
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={textLinkClassName}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default async function Home() {
  const latestActivity = SECTIONS_LIVE.activity ? (await getAllActivity()).slice(0, 3) : [];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-12 px-6 py-12 sm:py-16">
        <Header />
        <Intro />
        <NowSection entries={latestActivity} />
        <ExperienceSection />
        <ProjectList />
        <OpenSourcePreview />
        <Footer />
      </main>
    </div>
  );
}

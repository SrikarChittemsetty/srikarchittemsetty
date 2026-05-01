"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { openSourceContributions } from "@/data/open-source";
import ThemeToggle from "@/components/theme-toggle";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const searchableText = [project.name, project.description, project.status, ...project.tags]
          .join(" ")
          .toLowerCase();

        return !normalizedQuery || searchableText.includes(normalizedQuery);
      }),
    [normalizedQuery]
  );

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4 border-b border-neutral-200 pb-8 dark:border-neutral-800">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex text-sm text-neutral-600 transition-all duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              ← Back to Home
            </Link>
            <ThemeToggle />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">Garage</h1>
            <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Tools, systems, and finished builds I&apos;m turning into reusable parts of my workflow.
              For now, this is also the deeper project gallery and public contribution record behind the
              homepage showcase.
            </p>
          </div>
        </header>

        <section className="space-y-3">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by build, tool, technology, status, or tags..."
            className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-neutral-600"
          />
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
            >
              <div className="relative aspect-[3/2] border-b border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950">
                <Image
                  src={project.image}
                  alt={`${project.name} project cover`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{project.status}</p>
                      <h2 className="mt-1 font-medium text-neutral-950 dark:text-neutral-100">{project.name}</h2>
                    </div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{project.year}</span>
                  </div>
                  <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                  <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">Why:</span>{" "}
                    {project.why}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 transition-all duration-200 hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </section>

        {filteredProjects.length === 0 ? (
          <p className="border-y border-neutral-200 px-2 py-5 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
            No projects match that search yet.
          </p>
        ) : null}

        <section className="space-y-4 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
              Open Source
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              A growing record of merged contributions to external tools, SDKs, and developer-facing
              projects.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {openSourceContributions.map((contribution) => (
              <article
                key={contribution.prUrl}
                className="space-y-4 rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                      {contribution.repository}
                    </p>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/60 dark:text-emerald-300">
                      {contribution.status}
                    </span>
                  </div>
                  <h3 className="font-medium text-neutral-950 dark:text-neutral-100">
                    {contribution.title}
                  </h3>
                  <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {contribution.summary}
                  </p>
                  <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">Impact:</span>{" "}
                    {contribution.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {contribution.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={contribution.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 transition-all duration-200 hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                >
                  <FaGithub size={15} />
                  View Pull Request
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

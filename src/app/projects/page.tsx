"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

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
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4 border-b border-neutral-200 pb-8">
          <Link
            href="/"
            className="inline-flex text-sm text-neutral-600 transition-all duration-200 hover:text-neutral-900"
          >
            ← Back to Home
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">Projects</h1>
            <p className="max-w-2xl text-base leading-7 text-neutral-600">
              Tools and experiments I&apos;ve built for my own workflows, ideas, and curiosities.
            </p>
          </div>
        </header>

        <section className="space-y-4">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects by name, description, status, or tags..."
            className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all duration-200 placeholder:text-neutral-400 focus:border-neutral-400"
          />
        </section>

        <section className="grid gap-5 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50"
            >
              <div className="relative aspect-[3/2] border-b border-neutral-200 bg-neutral-100">
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
                      <p className="text-xs uppercase tracking-wide text-neutral-500">{project.status}</p>
                      <h2 className="mt-1 font-medium text-neutral-950">{project.name}</h2>
                    </div>
                    <span className="text-sm text-neutral-500">{project.year}</span>
                  </div>
                  <p className="text-sm leading-6 text-neutral-600">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 transition-all duration-200 hover:text-neutral-500"
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </section>

        {filteredProjects.length === 0 ? (
          <p className="border-y border-neutral-200 px-2 py-5 text-sm text-neutral-600">
            No projects match that search yet.
          </p>
        ) : null}
      </main>
    </div>
  );
}

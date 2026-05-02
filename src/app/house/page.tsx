"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import HouseScene from "@/components/house-scene";
import ThemeToggle from "@/components/theme-toggle";

export default function HousePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:py-16">
        <header className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <ChevronRight size={14} className="rotate-180" />
              Home
            </Link>
            <ThemeToggle />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
              Brainscape
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              An optional interactive map of this portfolio: entry for home, study for writing, garage for projects
              and public contributions, shelf for favorites, and kitchen, attic, and basement for experiments,
              shelved ideas, and deeper systems work.
            </p>
          </div>
        </header>
        <HouseScene />
      </main>
    </div>
  );
}

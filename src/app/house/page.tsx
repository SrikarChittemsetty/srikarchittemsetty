"use client";

import HouseScene from "@/components/house-scene";
import { SubpageTitleRow, subpageHeaderTaglineClassName } from "@/components/subpage-title-row";

export default function HousePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:py-16">
        <header className="space-y-3">
          <SubpageTitleRow>Behind the Scenes</SubpageTitleRow>
          <p className={subpageHeaderTaglineClassName}>
            An optional interactive map of this portfolio: entry for home, study for writing, garage for projects
            and public contributions, shelf for favorites, and kitchen, attic, and basement for experiments,
            shelved ideas, and deeper systems work.
          </p>
        </header>
        <HouseScene />
      </main>
    </div>
  );
}

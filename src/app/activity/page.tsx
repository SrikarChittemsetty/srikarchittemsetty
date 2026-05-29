import { SubpageTitleRow, subpageHeaderTaglineClassName } from "@/components/subpage-title-row";
import { getAllActivity, type ActivityEntry } from "@/data/activity";

function formatDate(value: string) {
  const date = new Date(value + "T12:00:00");
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function JournalList({ entries }: { entries: ActivityEntry[] }) {
  if (entries.length === 0) {
    return (
      <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
        No entries yet — add a day to{" "}
        <code className="font-mono text-xs">src/data/activity.ts</code>.
      </p>
    );
  }

  return (
    <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
      {entries.map((entry) => (
        <article key={entry.date} className="space-y-2 py-6 first:pt-0 last:pb-0">
          <time
            dateTime={entry.date}
            className="block text-sm font-medium text-neutral-950 dark:text-neutral-100"
          >
            {formatDate(entry.date)}
          </time>
          <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">{entry.note}</p>
        </article>
      ))}
    </div>
  );
}

export default function ActivityPage() {
  const entries = getAllActivity();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4 border-b border-neutral-200 pb-8 dark:border-neutral-800">
          <SubpageTitleRow>Activity</SubpageTitleRow>
          <p className={subpageHeaderTaglineClassName}>
            A short daily note on what I worked on, read, learned, practiced, or finished.
          </p>
        </header>

        <section aria-label="Daily activity journal">
          <JournalList entries={entries} />
        </section>
      </main>
    </div>
  );
}

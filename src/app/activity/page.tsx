import Link from "next/link";
import { notFound } from "next/navigation";
import { SubpageTitleRow, subpageHeaderTaglineClassName } from "@/components/subpage-title-row";
import { SECTIONS_LIVE } from "@/lib/feature-flags";
import { activityIntroQuote } from "@/data/activity";
import { getActivityByDay, type ActivityDay, type ActivityEntry } from "@/lib/activity-content";

function quoteAsSingleParagraph(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function formatDate(value: string) {
  const date = new Date(value + "T12:00:00");
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function Fragment({ entry }: { entry: ActivityEntry }) {
  const heading = entry.title ?? entry.link;

  return (
    <li className="space-y-1">
      {heading ? (
        <p className="text-base leading-7 text-neutral-800 dark:text-neutral-200">
          {entry.link ? (
            <a
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
            >
              {heading}
            </a>
          ) : (
            heading
          )}
          {entry.source ? (
            <span className="text-neutral-500 dark:text-neutral-400">
              {" "}
              — {entry.source}
            </span>
          ) : null}
          {entry.kind ? (
            <span className="ml-2 text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
              {entry.kind}
            </span>
          ) : null}
        </p>
      ) : null}
      {entry.note ? (
        <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">{entry.note}</p>
      ) : null}
    </li>
  );
}

function JournalList({ days }: { days: ActivityDay[] }) {
  if (days.length === 0) {
    return (
      <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
        No entries yet — add one in the{" "}
        <Link href="/admin" className="underline underline-offset-2">
          admin editor
        </Link>{" "}
        or add a JSON file to{" "}
        <code className="font-mono text-xs">content/activity/</code>.
      </p>
    );
  }

  return (
    <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
      {days.map((day) => (
        <article key={day.date} className="space-y-3 py-6 first:pt-0 last:pb-0">
          <time
            dateTime={day.date}
            className="block text-sm font-medium text-neutral-950 dark:text-neutral-100"
          >
            {formatDate(day.date)}
          </time>
          <ul className="space-y-3">
            {day.entries.map((entry) => (
              <Fragment key={entry.slug} entry={entry} />
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default async function ActivityPage() {
  if (!SECTIONS_LIVE.activity) {
    notFound();
  }

  const days = await getActivityByDay();
  const quoteText = quoteAsSingleParagraph(activityIntroQuote.text);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4 border-b border-neutral-200 pb-8 dark:border-neutral-800">
          <SubpageTitleRow>Activity</SubpageTitleRow>
          <blockquote className="max-w-none border-l-2 border-neutral-300 pl-3 dark:border-neutral-600 sm:pl-4">
            <p className="text-xs leading-snug tracking-tighter italic text-neutral-600 dark:text-neutral-400 sm:text-[13px] sm:tracking-tight">
              {quoteText}
            </p>
            {activityIntroQuote.attribution ? (
              <footer className="mt-2 text-[11px] font-medium not-italic text-neutral-500 dark:text-neutral-400 sm:text-xs">
                — <cite>{activityIntroQuote.attribution}</cite>
              </footer>
            ) : null}
          </blockquote>
          <p className={subpageHeaderTaglineClassName}>
            Chronicling how I spend each day of my 4,000 weeks.
          </p>
        </header>

        <section aria-label="Daily activity journal">
          <JournalList days={days} />
        </section>
      </main>
    </div>
  );
}

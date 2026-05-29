/** One day = one short paragraph. Append entries to the journal. */
export type ActivityEntry = {
  /** ISO date `YYYY-MM-DD` — used for sort order (newest first on `/activity`). */
  date: string;
  note: string;
};

export const activityJournal: ActivityEntry[] = [];

export function getAllActivity(): ActivityEntry[] {
  return [...activityJournal].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/** Epigraph on `/activity` — verbatim quote only; edit `attribution` for the credit line. */
export const activityIntroQuote: { text: string; attribution?: string } = {
  text: "The average human lifespan is absurdly, terrifyingly, insultingly short. Assuming you live to be eighty, you have just over four thousand weeks.",
  attribution: "Oliver Burkeman, Four Thousand Weeks: Time Management for Mortals",
};

/** One day = one short paragraph. Append entries to the journal. */
export type ActivityEntry = {
  /** ISO date `YYYY-MM-DD` — used for sort order (newest first on `/activity`). */
  date: string;
  note: string;
};

export const activityJournal: ActivityEntry[] = [
  {
    date: "2026-05-29",
    note: "Spent most of the day cleaning and packing up my room for move-out. Had chicken and waffles, toast with sunny-side-up eggs and jam, and worked through some internship details.",
  },
  {
    date: "2026-05-28",
    note: "Took my Mathematical Methods final at 8 AM, then grabbed empanadas from the lady in front of the Reg on the way back to my dorm to study for my Philosophical Perspectives final at 3:30. After that ended, came back to my room and did some LeetCode, reviewed the first chapter of Alex Xu's System Design Interview, and started clearing out my room for move-out this weekend.",
  },
];

export function getAllActivity(): ActivityEntry[] {
  return [...activityJournal].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

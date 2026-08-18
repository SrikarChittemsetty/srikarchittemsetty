import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

/** What a fragment is: a link, a bare thought, or a link with a thought attached. */
export type ActivityEntry = {
  /** Filename without extension — stable id, used as the React key. */
  slug: string;
  /** Resolved calendar date, always `YYYY-MM-DD`. */
  date: string;
  /** True when the date came from the commit rather than the entry file. */
  stamped: boolean;
  link?: string;
  title?: string;
  /** Channel, publication, author — whoever made the thing. */
  source?: string;
  kind?: string;
  note?: string;
};

export type ActivityDay = {
  date: string;
  entries: ActivityEntry[];
};

type RawEntry = {
  /** Optional. Set it to override the commit stamp when logging a day after the fact. */
  date?: string;
  link?: string;
  title?: string;
  source?: string;
  kind?: string;
  note?: string;
};

const contentDir = path.join(process.cwd(), "content/activity");
const repo = "SrikarChittemsetty/srikarchittemsetty";

/** Commit stamps are UTC; render them as the day it was where the entry was written. */
const timeZone = "America/Chicago";

const dayFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function toCalendarDay(iso: string): string {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return iso.slice(0, 10);
  return dayFormatter.format(parsed);
}

/**
 * A shallow clone's boundary commit has no parent, so every file in it looks
 * freshly added. That would hand us the clone date instead of the real one.
 */
function isShallowClone(): boolean {
  try {
    const gitDir = execFileSync("git", ["rev-parse", "--git-dir"], {
      cwd: process.cwd(),
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();

    return fs.existsSync(path.resolve(process.cwd(), gitDir, "shallow"));
  } catch {
    return true;
  }
}

/**
 * Date the file was first committed, per local git history.
 *
 * Entries published through the admin are committed by GitHub, so this reads
 * back the server's stamp. Returns null when history isn't trustworthy —
 * notably on a shallow CI clone, where `resolveFromApi` takes over.
 */
function resolveFromGit(file: string): string | null {
  if (isShallowClone()) return null;

  try {
    const out = execFileSync(
      "git",
      ["log", "--diff-filter=A", "--format=%aI", "--", path.join("content/activity", file)],
      { cwd: process.cwd(), encoding: "utf-8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();

    const firstAdd = out.split("\n").filter(Boolean).pop();
    return firstAdd ? toCalendarDay(firstAdd) : null;
  } catch {
    return null;
  }
}

/** Same stamp, read straight from GitHub. Public repo, so no token needed. */
async function resolveFromApi(file: string): Promise<string | null> {
  const url =
    `https://api.github.com/repos/${repo}/commits` +
    `?path=content/activity/${encodeURIComponent(file)}&per_page=100`;

  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) return null;

    const commits = (await response.json()) as Array<{
      commit?: { committer?: { date?: string } };
    }>;

    // Newest first, so the oldest commit that touched the file is last.
    const created = commits.at(-1)?.commit?.committer?.date;
    return created ? toCalendarDay(created) : null;
  } catch {
    return null;
  }
}

async function resolveDate(file: string, raw: RawEntry) {
  // An explicit date is a deliberate override — never second-guess it.
  if (raw.date) return { date: raw.date.slice(0, 10), stamped: false };

  const fromGit = resolveFromGit(file);
  if (fromGit) return { date: fromGit, stamped: true };

  const fromApi = await resolveFromApi(file);
  if (fromApi) return { date: fromApi, stamped: true };

  // Unpublished draft sitting in the working tree — fall back to the file itself.
  const mtime = fs.statSync(path.join(contentDir, file)).mtime.toISOString();
  return { date: toCalendarDay(mtime), stamped: true };
}

export async function getAllActivity(): Promise<ActivityEntry[]> {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".json"));

  const entries = await Promise.all(
    files.map(async (file) => {
      const raw = JSON.parse(fs.readFileSync(path.join(contentDir, file), "utf-8")) as RawEntry;
      const { date, stamped } = await resolveDate(file, raw);

      return {
        slug: file.replace(/\.json$/, ""),
        date,
        stamped,
        link: raw.link,
        title: raw.title,
        source: raw.source,
        kind: raw.kind,
        note: raw.note,
      };
    }),
  );

  return entries.sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug));
}

/** Fragments grouped under one heading per day, newest day first. */
export async function getActivityByDay(): Promise<ActivityDay[]> {
  const entries = await getAllActivity();
  const days: ActivityDay[] = [];

  for (const entry of entries) {
    const current = days.at(-1);
    if (current?.date === entry.date) {
      current.entries.push(entry);
    } else {
      days.push({ date: entry.date, entries: [entry] });
    }
  }

  return days;
}

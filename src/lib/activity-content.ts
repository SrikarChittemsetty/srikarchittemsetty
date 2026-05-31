import fs from "fs";
import path from "path";

export type ActivityEntry = {
  date: string;
  note: string;
};

const contentDir = path.join(process.cwd(), "content/activity");

export function getAllActivity(): ActivityEntry[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const entries = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      return JSON.parse(raw) as ActivityEntry;
    });

  return entries.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

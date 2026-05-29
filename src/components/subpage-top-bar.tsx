import Link from "next/link";
import { House } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

type Props = {
  /** When set with `backLabel`, a text link to the parent (e.g. activity index). Omit when home is only the house icon. */
  backHref?: string;
  backLabel?: string;
};

/**
 * Subpage header: optional contextual “up” link on the left; house → `/` + theme toggle on the right.
 * Omit `backHref` / `backLabel` on pages whose parent is already `/` (house icon is enough).
 */
export function SubpageTopBar({ backHref, backLabel }: Props) {
  const contextual = backHref != null && backLabel != null;

  return (
    <div className={`flex items-center gap-4 ${contextual ? "justify-between" : "justify-end"}`}>
      {contextual ? (
        <Link
          href={backHref}
          className="inline-flex min-w-0 text-sm text-neutral-600 transition-all duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          {backLabel}
        </Link>
      ) : null}
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href="/"
          aria-label="Home"
          title="Home"
          className="inline-flex rounded-md p-1 text-neutral-600 transition-all duration-200 hover:bg-black/5 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-100"
        >
          <House size={16} />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}

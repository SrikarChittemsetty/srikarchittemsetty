import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { SubpageTopBar } from "@/components/subpage-top-bar";

type SubpageTitleRowProps = {
  children: ReactNode;
  /** Parent route for the back arrow. Defaults to `/`. */
  backHref?: string;
  /** Accessible name and tooltip for the back control. */
  backLabel?: string;
};

const backLinkClassName =
  "inline-flex shrink-0 items-center justify-center rounded-md p-1 text-neutral-600 transition-all duration-200 hover:bg-black/5 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-100";

/** Muted intro line under the page title (pair with `SubpageTitleRow`). */
export const subpageHeaderTaglineClassName =
  "max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400";

export function SubpageTitleRow({ children, backHref = "/", backLabel = "Back to home" }: SubpageTitleRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 sm:gap-4">
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <Link href={backHref} aria-label={backLabel} title={backLabel} className={backLinkClassName}>
          <ArrowLeft size={22} strokeWidth={1.75} />
        </Link>
        <h1 className="min-w-0 text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
          {children}
        </h1>
      </div>
      <SubpageTopBar />
    </div>
  );
}

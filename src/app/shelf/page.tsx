"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ShelfEntry = {
  title: string;
  label: string;
  image: string;
  href?: string;
};

const shelfItems: ShelfEntry[] = [
  {
    title: "One Piece",
    label: "Anime / Manga",
    image: "/shelf/one-piece.jpg",
    href: "https://en.wikipedia.org/wiki/One_Piece",
  },
  {
    title: "The Stranger",
    label: "Book",
    image: "/shelf/the-stranger-vintage.jpg",
    href: "https://en.wikipedia.org/wiki/The_Stranger_(Camus_novel)",
  },
  {
    title: "Within Reason",
    label: "YouTube / Podcast",
    image: "/shelf/within-reason-portrait.jpg",
    href: "https://podcasts.apple.com/us/podcast/within-reason/id1458675168",
  },
  {
    title: "How I Met Your Mother",
    label: "TV",
    image: "/shelf/how-i-met-your-mother.jpg",
    href: "https://en.wikipedia.org/wiki/How_I_Met_Your_Mother",
  },
  {
    title: "BoJack Horseman",
    label: "TV",
    image: "/shelf/bojack-horseman.jpg",
    href: "https://en.wikipedia.org/wiki/BoJack_Horseman",
  },
  {
    title: "One Punch Man",
    label: "Anime / Manga",
    image: "/shelf/one-punch-man-saitama.jpg",
    href: "https://en.wikipedia.org/wiki/One-Punch_Man",
  },
];

function ShelfCard({ item }: { item: ShelfEntry }) {
  const [imageFailed, setImageFailed] = useState(false);
  const cardBody = (
    <article className="space-y-3 rounded-xl p-2 transition-all duration-200 hover:bg-black/[0.02]">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
        {!imageFailed ? (
          <Image
            src={item.image}
            alt={`${item.title} cover`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs uppercase tracking-wide text-neutral-400">
            Cover
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h2 className="text-sm font-medium text-neutral-900">{item.title}</h2>
        <p className="text-xs uppercase tracking-wide text-neutral-500">{item.label}</p>
      </div>
    </article>
  );

  if (!item.href) return cardBody;

  const isExternal = item.href.startsWith("http");
  return isExternal ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
      {cardBody}
    </a>
  ) : (
    <Link href={item.href} className="block">
      {cardBody}
    </Link>
  );
}

export default function ShelfPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4 border-b border-neutral-200 pb-8">
          <Link
            href="/"
            className="inline-flex text-sm text-neutral-600 transition-all duration-200 hover:text-neutral-900"
          >
            ← Back to Home
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">Shelf</h1>
            <p className="max-w-2xl text-base leading-7 text-neutral-600">
              A loose collection of favorites, references, and things I keep coming back to.
            </p>
          </div>
        </header>

        <section>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {shelfItems.map((item) => (
              <ShelfCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

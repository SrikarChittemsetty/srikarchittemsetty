"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

type ShelfEntry = {
  title: string;
  label: string;
  image?: string;
  images?: string[];
};

const shelfItems: ShelfEntry[] = [
  {
    title: "One Piece",
    label: "Anime / Manga",
    image: "/shelf/one-piece.jpg",
  },
  {
    title: "The Stranger",
    label: "Book",
    image: "/shelf/the-stranger-vintage.jpg",
  },
  {
    title: "Within Reason",
    label: "YouTube / Podcast",
    image: "/shelf/within-reason-portrait.jpg",
  },
  {
    title: "How I Met Your Mother",
    label: "TV",
    image: "/shelf/how-i-met-your-mother.jpg",
  },
  {
    title: "Two and a Half Men",
    label: "TV",
    image: "/shelf/two-and-a-half-men-imdb.jpg",
  },
  {
    title: "Shark Tank",
    label: "TV",
    image: "/shelf/shark-tank.webp",
  },
  {
    title: "Gordon Ramsay",
    label: "Cooking / TV",
    images: [
      "/shelf/hells-kitchen.jpg",
      "/shelf/masterchef.jpg",
      "/shelf/kitchen-nightmares-ramsay.jpg",
    ],
  },
  {
    title: "BoJack Horseman",
    label: "TV",
    image: "/shelf/bojack-horseman.jpg",
  },
  {
    title: "One Punch Man",
    label: "Anime / Manga",
    image: "/shelf/one-punch-man-saitama.jpg",
  },
];

function ShelfCard({ item }: { item: ShelfEntry }) {
  const [imageFailed, setImageFailed] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = item.images ?? (item.image ? [item.image] : []);
  const activeImage = images[imageIndex] ?? images[0];
  const hasPages = images.length > 1;

  useEffect(() => {
    if (!hasPages || isPaused) return;
    const intervalId = window.setInterval(() => {
      setImageFailed(false);
      setImageIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, [hasPages, images.length, isPaused]);

  const showNextPage = () => {
    if (!hasPages) return;
    setImageFailed(false);
    setImageIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  const cardBody = (
    <article
      className="group space-y-3 rounded-xl p-2 transition-all duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[2/3] rounded-lg">
        <button
          type="button"
          disabled={!hasPages}
          aria-label={hasPages ? `Flip ${item.title} to the next page` : undefined}
          onClick={showNextPage}
          className="shelf-page-frame relative z-30 block h-full w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 text-left shadow-sm transition-all duration-200 group-hover:border-neutral-300 group-hover:shadow-md disabled:cursor-default dark:border-neutral-800 dark:bg-neutral-900 dark:group-hover:border-neutral-700"
        >
        {!imageFailed && activeImage ? (
          <Image
            key={activeImage}
            src={activeImage}
            alt={`${item.title} cover`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-opacity duration-300 ${
              images.length > 1 ? "shelf-page-image group-hover:brightness-[1.03]" : ""
            }`}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
            Cover
          </div>
        )}
        {hasPages ? (
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/85 px-2.5 py-1.5 opacity-80 shadow-sm backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 group-hover:shadow-md dark:bg-neutral-950/75"
          >
            {images.map((image, index) => (
              <span
                key={image}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  index === imageIndex
                    ? "w-4 bg-neutral-900 dark:bg-neutral-100"
                    : "w-1.5 bg-neutral-300 dark:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        ) : null}
        </button>
      </div>
      <div className="space-y-1">
        <h2 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{item.title}</h2>
        <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{item.label}</p>
      </div>
    </article>
  );
  return cardBody;
}

export default function ShelfPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4 border-b border-neutral-200 pb-8 dark:border-neutral-800">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex text-sm text-neutral-600 transition-all duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              ← Back to Home
            </Link>
            <ThemeToggle />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">Shelf</h1>
            <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
              A loose collection of favorites, references, and things I keep coming back to.
            </p>
          </div>
        </header>

        <section className="space-y-3">
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

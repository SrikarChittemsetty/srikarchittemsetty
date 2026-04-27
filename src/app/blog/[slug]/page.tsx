import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";

type VoicePressPostDetail = {
  title: string;
  slug: string;
  body?: string;
  excerpt?: string;
  cover_image_url?: string;
  created_at?: string;
  tags?: string;
  category?: string;
};

const VOICEPRESS_API_BASE_URL =
  process.env.NEXT_PUBLIC_VOICEPRESS_API_BASE_URL ?? "http://127.0.0.1:5000";

function formatDate(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

async function getPost(slug: string): Promise<VoicePressPostDetail | null | "error"> {
  try {
    const response = await fetch(`${VOICEPRESS_API_BASE_URL}/api/posts/${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (response.status === 404) return null;
    if (!response.ok) return "error";
    const data = (await response.json()) as VoicePressPostDetail;
    return data;
  } catch {
    return "error";
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (post === null) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4 border-b border-neutral-200 pb-8 dark:border-neutral-800">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex text-sm text-neutral-600 transition-all duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              ← Back to Blog
            </Link>
            <ThemeToggle />
          </div>
          {post === "error" ? (
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">Blog</h1>
              <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
                Writing will appear here once VoicePress has public posts.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400">
                {post.created_at ? <span>{formatDate(post.created_at)}</span> : null}
                {post.tags || post.category ? (
                  <span>{[post.category, post.tags].filter(Boolean).join(" · ")}</span>
                ) : null}
              </div>
            </div>
          )}
        </header>

        <section>
          {post === "error" ? (
            <p className="border-y border-neutral-200 px-2 py-5 text-sm leading-6 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
              Writing will appear here once VoicePress has public posts.
            </p>
          ) : (
            <div className="space-y-4">
              {post.cover_image_url ? (
                <img
                  src={post.cover_image_url}
                  alt={`${post.title} cover`}
                  className="max-h-[360px] w-full rounded-lg border border-neutral-200 object-cover dark:border-neutral-800"
                />
              ) : null}
              <article className="whitespace-pre-wrap border-y border-neutral-200 px-2 py-6 text-base leading-8 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                {post.body || post.excerpt || "Writing will appear here once VoicePress has public posts."}
              </article>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

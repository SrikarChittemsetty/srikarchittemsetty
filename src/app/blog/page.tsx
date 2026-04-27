import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

type VoicePressPost = {
  title: string;
  slug: string;
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

async function getPosts(): Promise<VoicePressPost[] | null> {
  try {
    const response = await fetch(`${VOICEPRESS_API_BASE_URL}/api/posts`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    const data = (await response.json()) as VoicePressPost[];
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  const hasPosts = Array.isArray(posts) && posts.length > 0;

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
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">Blog</h1>
            <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Notes, essays, and project logs will live here as I connect this site with
              VoicePress.
            </p>
          </div>
        </header>

        <section className="space-y-3">
          {!hasPosts ? (
            <p className="border-y border-neutral-200 px-2 py-5 text-sm leading-6 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
              Writing will appear here once VoicePress has public posts.
            </p>
          ) : (
            <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="space-y-3 rounded-lg px-2 py-5 transition-all duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
                >
                  {post.cover_image_url ? (
                    <img
                      src={post.cover_image_url}
                      alt={`${post.title} cover`}
                      className="max-h-[360px] w-full rounded-lg border border-neutral-200 object-cover dark:border-neutral-800"
                    />
                  ) : null}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-lg font-medium text-neutral-950 transition-all duration-200 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400"
                    >
                      {post.title}
                    </Link>
                    {post.created_at ? (
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">{formatDate(post.created_at)}</span>
                    ) : null}
                  </div>
                  {post.excerpt ? (
                    <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{post.excerpt}</p>
                  ) : null}
                  {post.tags || post.category ? (
                    <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                      {[post.category, post.tags].filter(Boolean).join(" · ")}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

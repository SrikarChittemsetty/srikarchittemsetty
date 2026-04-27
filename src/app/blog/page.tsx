import Link from "next/link";

type VoicePressPost = {
  title: string;
  slug: string;
  excerpt?: string;
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
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">Blog</h1>
            <p className="max-w-2xl text-base leading-7 text-neutral-600">
              Notes, essays, and project logs will live here as I connect this site with
              VoicePress.
            </p>
          </div>
        </header>

        <section>
          {!hasPosts ? (
            <p className="border-y border-neutral-200 px-2 py-5 text-sm leading-6 text-neutral-600">
              Writing will appear here once VoicePress has public posts.
            </p>
          ) : (
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {posts.map((post) => (
                <article key={post.slug} className="space-y-3 px-2 py-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-lg font-medium text-neutral-950 transition-all duration-200 hover:text-neutral-600"
                    >
                      {post.title}
                    </Link>
                    {post.created_at ? (
                      <span className="text-sm text-neutral-500">{formatDate(post.created_at)}</span>
                    ) : null}
                  </div>
                  {post.excerpt ? (
                    <p className="text-sm leading-6 text-neutral-600">{post.excerpt}</p>
                  ) : null}
                  {post.tags || post.category ? (
                    <p className="text-xs uppercase tracking-wide text-neutral-500">
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

import Image from "next/image";
import Link from "next/link";
import { SubpageTitleRow, subpageHeaderTaglineClassName } from "@/components/subpage-title-row";
import { blogIntroQuote, getAllBlogPosts, type BlogPost } from "@/data/blog";

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

function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="space-y-3 rounded-lg px-2 py-5 transition-all duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.03]"
        >
          {post.cover_image_url ? (
            <Image
              src={post.cover_image_url}
              alt={`${post.title} cover`}
              width={1200}
              height={720}
              unoptimized
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
  );
}

function quoteAsSingleParagraph(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const quoteText = quoteAsSingleParagraph(blogIntroQuote.text);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4 border-b border-neutral-200 pb-8 dark:border-neutral-800">
          <SubpageTitleRow>Blog</SubpageTitleRow>
          <blockquote className="max-w-none border-l-2 border-neutral-300 pl-3 dark:border-neutral-600 sm:pl-4">
            <p className="text-xs leading-snug tracking-tighter italic text-neutral-600 dark:text-neutral-400 sm:text-[13px] sm:tracking-tight">
              {quoteText}
            </p>
            {blogIntroQuote.attribution ? (
              <footer className="mt-2 text-[11px] font-medium not-italic text-neutral-500 dark:text-neutral-400 sm:text-xs">
                — <cite>{blogIntroQuote.attribution}</cite>
              </footer>
            ) : null}
          </blockquote>
          <p className={subpageHeaderTaglineClassName}>
            For blueprints, notes to self, and rabbit holes.
          </p>
        </header>

        <section className="space-y-3">
          <PostList posts={posts} />
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";
import { notFound } from "next/navigation";
import { SubpageTitleRow } from "@/components/subpage-title-row";
import { blogPosts, getBlogPostBySlug, type BlogPost } from "@/data/blog";

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

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: BlogPost | undefined = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <main className="mx-auto flex w-full max-w-[800px] flex-col gap-10 px-6 py-12 sm:py-16">
        <header className="space-y-4 border-b border-neutral-200 pb-8 dark:border-neutral-800">
          <SubpageTitleRow backHref="/blog" backLabel="Back to blog">
            {post.title}
          </SubpageTitleRow>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400">
            {post.created_at ? <span>{formatDate(post.created_at)}</span> : null}
            {post.tags || post.category ? (
              <span>{[post.category, post.tags].filter(Boolean).join(" · ")}</span>
            ) : null}
          </div>
        </header>

        <section>
          <div className="space-y-4">
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
            <article className="whitespace-pre-wrap border-y border-neutral-200 px-2 py-6 text-base leading-8 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
              {post.body || post.excerpt || ""}
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

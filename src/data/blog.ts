/** Epigraph on `/blog` — verbatim quote only; edit `attribution` for the credit line. */
export const blogIntroQuote: { text: string; attribution?: string } = {
  text: `When do you think people die?

When they are shot through the heart by the bullet of a pistol? No.

When they are ravaged by an incurable disease? No. ...It’s when they’re forgotten.`,
  attribution: "One Piece",
};

/** One post = one object here. Add entries to publish; `slug` becomes `/blog/[slug]`. */
export type BlogPost = {
  title: string;
  slug: string;
  excerpt?: string;
  cover_image_url?: string;
  created_at: string;
  tags?: string;
  category?: string;
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Building a Personal Ecosystem Portfolio",
    slug: "building-a-personal-ecosystem-portfolio",
    excerpt:
      "Notes on turning a personal website into a connected system for projects, writing, experiments, and tools.",
    category: "Project Log",
    tags: "Next.js, Portfolio, Writing",
    created_at: "2026-04-28",
    body: `I built this portfolio because a single static page was not enough to show how I work: I wanted one place that could grow with projects, writing, and small experiments without starting from scratch every time.

The site ties together a few surfaces on purpose. The projects gallery is the anchor for shipped work. The Shelf is a lighter, curated corner for media and books I care about. The blog is where longer notes and breakdowns live, and Behind the Scenes is a playful map of the same site from another angle. Together they read as one ecosystem instead of a pile of disconnected links.

The blog itself is intentionally simple: posts are TypeScript data in this repository, so publishing is "edit the file, commit, deploy" with no separate CMS or API to keep warm. That trades convenience for reliability, which matches how I want this surface to behave as the rest of the stack evolves.

Shipping involved Next.js on Vercel for the portfolio, explicit empty states, and keeping each subsystem something I can reason about alone.

Next I want to add more project logs here, tighten performance on image-heavy pages, and keep the boundary clear between what lives on the portfolio and what stays in dedicated repos so both stay easy to maintain.`,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

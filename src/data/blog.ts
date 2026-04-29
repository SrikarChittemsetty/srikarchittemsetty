export type LocalBlogPost = {
  title: string;
  slug: string;
  excerpt?: string;
  cover_image_url?: string;
  created_at: string;
  tags?: string;
  category?: string;
  body: string;
};

export const localFallbackPosts: LocalBlogPost[] = [
  {
    title: "Building a Personal Ecosystem Portfolio",
    slug: "building-a-personal-ecosystem-portfolio",
    excerpt:
      "Notes on turning a personal website into a connected system for projects, writing, experiments, and tools.",
    category: "Project Log",
    tags: "Next.js, VoicePress, Portfolio",
    created_at: "2026-04-28",
    body: `I built this portfolio because a single static page was not enough to show how I work: I wanted one place that could grow with projects, writing, and small experiments without starting from scratch every time.

The site ties together a few surfaces on purpose. The projects gallery is the anchor for shipped work. The Shelf is a lighter, curated corner for media and books I care about. The blog is where longer notes and breakdowns live, and the optional House view is a playful way to explore the same site from another angle. Together they read as one ecosystem instead of a pile of disconnected links.

VoicePress sits behind the blog when it is available: posts are fetched from a public API so publishing can stay in a dedicated writing app while the portfolio stays the front door. When VoicePress has no public posts yet, these local notes keep the blog from looking abandoned and document intent in plain language.

Shipping involved Next.js on Vercel for the portfolio and thinking about cold starts and reliability for the VoicePress backend on Render. That split taught me to design empty and unavailable states explicitly so visitors never hit a silent failure when a service is waking up or redeploying.

Next I want to add more project logs here, tighten performance on image-heavy pages, and keep the boundary clear between what lives on the portfolio and what stays in VoicePress so both stay easy to maintain.`,
  },
];

export function getLocalFallbackPostBySlug(slug: string): LocalBlogPost | undefined {
  return localFallbackPosts.find((post) => post.slug === slug);
}

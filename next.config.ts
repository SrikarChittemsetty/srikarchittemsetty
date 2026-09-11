import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Project covers and company logos are self-authored SVGs under public/.
    // The optimizer rejects SVG by default in production (400 INVALID_IMAGE_OPTIMIZE_REQUEST).
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/activity", permanent: true },
      { source: "/blog/:slug", destination: "/activity", permanent: true },
      { source: "/updates", destination: "/activity", permanent: true },
    ];
  },
};

export default nextConfig;

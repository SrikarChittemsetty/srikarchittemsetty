import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/blog", destination: "/activity", permanent: true },
      { source: "/blog/:slug", destination: "/activity", permanent: true },
      { source: "/updates", destination: "/activity", permanent: true },
    ];
  },
};

export default nextConfig;

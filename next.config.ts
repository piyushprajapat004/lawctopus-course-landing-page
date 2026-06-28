import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable React strict mode for catching common bugs.
   */
  reactStrictMode: true,

  /**
   * Image optimization configuration.
   * Add external domains/patterns for <Image> component.
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "cdn.lawctopus.com",
        pathname: "/**",
      },
    ],
  },

  /**
   * Security headers applied to all routes.
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

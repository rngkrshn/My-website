import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // basePath will be automatically injected by GitHub Actions workflow
  images: {
    unoptimized: true,
    domains: ['api.dicebear.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/7.x/**',
      },
    ],
  },
  // Ensure trailingSlash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;

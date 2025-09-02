import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vieraboschkova.github.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;

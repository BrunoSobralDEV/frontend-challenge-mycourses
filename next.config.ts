import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'evob-dev-upload.s3.amazonaws.com',
      pathname: '/**',
    },
    ],
  },
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
};

export default nextConfig;

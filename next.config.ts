import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['evob-dev-upload.s3.amazonaws.com'],
  },
};

export default nextConfig;

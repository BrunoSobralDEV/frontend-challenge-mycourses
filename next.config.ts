import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['evob-dev-upload.s3.amazonaws.com', 'i0.wp.com'],//apenas para teste - temporário
  },
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
};

export default nextConfig;

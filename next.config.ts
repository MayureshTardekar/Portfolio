import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;

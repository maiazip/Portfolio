import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Or false, depending on your project
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'media.licdn.com', 'drive.google.com',], }
};

export default nextConfig;
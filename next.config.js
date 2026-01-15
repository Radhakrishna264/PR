/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 🔴 MOST IMPORTANT
  output: "standalone",

  // 🔴 Cloudflare Pages ke liye
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

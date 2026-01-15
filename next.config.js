/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 🔴 MOST IMPORTANT
  output: "export",

  // 🔴 Cloudflare Pages ke liye
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

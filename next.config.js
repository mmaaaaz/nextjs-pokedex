/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    scrollRestoration: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  poweredByHeader: false,
  transpilePackages: ["geist"],

  images: {
    domains: ["raw.githubusercontent.com"],
    minimumCacheTTL: 84600 * 90, // 90days
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Turbopack is now the default bundler in Next.js 16
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  poweredByHeader: false,

  // Enable compression for smaller bundle sizes
  compress: true,

  // Optimize for static deployment
  output: "standalone",

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
}

export default nextConfig

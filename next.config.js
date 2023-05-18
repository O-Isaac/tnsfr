/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com"
      },
      {
        protocol: "https",
        hostname: "instagram.com"
      }
    ]
  }
}

module.exports = nextConfig

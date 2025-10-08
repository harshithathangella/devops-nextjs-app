/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ skip type errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ skip lint errors during build
  },
}

module.exports = nextConfig

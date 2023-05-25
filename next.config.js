/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    output: 'standalone',
  },
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
};

module.exports = nextConfig;

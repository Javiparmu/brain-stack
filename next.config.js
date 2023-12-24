/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost:3000',
      'images.unsplash.com',
      'plus.unsplash.com',
      'oaidalleapiprodscus.blob.core.windows.net',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

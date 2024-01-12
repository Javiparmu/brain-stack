/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['localhost:3000', 'oaidalleapiprodscus.blob.core.windows.net'],
  },
};

module.exports = nextConfig;

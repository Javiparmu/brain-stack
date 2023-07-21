/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', 'images.unsplash.com', 'plus.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = 'source-map';
    }
    return config;
  },
};

module.exports = nextConfig;

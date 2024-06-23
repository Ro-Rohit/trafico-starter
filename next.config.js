/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  experimental: {
    images: {
      unoptimized: true
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? '/trafico-starter' : '',
  assetPrefix: isProd ? '/trafico-starter/' : '',
}

module.exports = nextConfig

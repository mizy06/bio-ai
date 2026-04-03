const basePath = process.env.GITHUB_PAGES_BASE_PATH
  ? process.env.GITHUB_PAGES_BASE_PATH.startsWith('/')
    ? process.env.GITHUB_PAGES_BASE_PATH
    : `/${process.env.GITHUB_PAGES_BASE_PATH}`
  : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    externalDir: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;

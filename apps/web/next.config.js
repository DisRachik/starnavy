/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'starwars-visualguide.com' },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ['@repo/ui'],
};

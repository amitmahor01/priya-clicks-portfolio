/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'priyaclicks-bucket.s3.amazonaws.com',
        pathname: '/service_category_thumbnails/**',
      },
    ],
  },
};

module.exports = nextConfig;

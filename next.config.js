/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "api.together.ai",
        pathname: "/imgproxy/**",
      }
    ],
  },
  reactStrictMode: true
};

module.exports = nextConfig;

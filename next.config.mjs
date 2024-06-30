/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com", "picsum.photos", "openshop.uz", "placeimg.com"],
  },
  basePath: "/e-commerce-app",
  assetPrefix: "/e-commerce-app/",
};

export default nextConfig;

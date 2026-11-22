/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/angellyportfolio",
  images: {
    unoptimized: true, // bắt buộc khi dùng next/image với output: 'export'
  },
};

module.exports = nextConfig;

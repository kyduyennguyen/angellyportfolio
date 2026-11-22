/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true, // bắt buộc khi dùng next/image với output: 'export'
  },
};

module.exports = nextConfig;

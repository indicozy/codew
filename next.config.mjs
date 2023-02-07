import "./env/server.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [{ loader: "@next/font/google" }],
  },
};

export default nextConfig;

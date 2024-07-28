/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io']
  },
  env: {
    API_BASE_URL: "http://localhost:5000/api/v1",
    CLIENT_ID: process.env.CLIENT_ID,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    API_URL: process.env.API_URL || 'http://localhost:4000',
    VALIDATION_SERVICE_URL: process.env.VALIDATION_SERVICE_URL || 'http://localhost:8000',
  },
};

module.exports = nextConfig;

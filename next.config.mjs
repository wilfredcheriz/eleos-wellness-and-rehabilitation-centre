/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Skip ESLint checks during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

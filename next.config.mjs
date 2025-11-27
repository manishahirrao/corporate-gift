/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  devIndicators: {
    buildActivity: false, // hides Next.js bottom-right activity icon
  },
};

export default nextConfig;

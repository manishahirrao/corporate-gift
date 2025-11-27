/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Configure images for static export
  images: {
    unoptimized: true, // Required for static export
    domains: [], // Add any external image domains here
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable React StrictMode for static export
  reactStrictMode: false,
  
  // Disable dev indicators
  devIndicators: {
    buildActivity: false,
  },
  
  // Enable source maps in production
  productionBrowserSourceMaps: true,
};

export default nextConfig;

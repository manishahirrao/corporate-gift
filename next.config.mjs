/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Configure images for static export
  images: {
    unoptimized: true, // Required for static export
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
  
  // Ensure trailing slash for static export
  trailingSlash: true,
};

export default nextConfig;

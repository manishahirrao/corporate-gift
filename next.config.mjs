/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Base path for production (if needed)
  // basePath: '/your-repo-name',
  
  // Optional: Add a trailing slash to all paths
  // trailingSlash: true,
  
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
  
  // Disable the default file-system routing for the pages directory
  // and use the app directory for routing
  experimental: {
    appDir: true,
  },
};

export default nextConfig;

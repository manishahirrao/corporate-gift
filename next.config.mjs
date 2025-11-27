/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Base path for production (if needed)
  // basePath: '/your-repo-name',
  
  // Optional: Add a trailing slash to all paths
  // trailingSlash: true,
  
  // Enable static HTML export
  images: {
    unoptimized: true, // Required for static export
    domains: [], // Add any external image domains here
  },
  
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
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

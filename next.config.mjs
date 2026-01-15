/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow external images from these domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.yimg.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'lookaside.fbsbx.com',
      },
      {
        protocol: 'https',
        hostname: 'www.idiskitimes.co.za',
      },
    ],
  },
};

export default nextConfig;
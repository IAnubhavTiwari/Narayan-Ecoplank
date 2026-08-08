/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.veilcraft.in' },
      { protocol: 'https', hostname: 'veilcraft.in' },
    ],
  },
};

export default nextConfig;

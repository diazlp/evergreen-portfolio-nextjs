/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nitya-landing-page.netlify.app',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'up.raindrop.io',
        port: '',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;

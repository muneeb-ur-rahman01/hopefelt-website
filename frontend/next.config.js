/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/campaigns", destination: "/campaigns-initiatives", permanent: true },
      { source: "/campaigns/:slug", destination: "/campaigns-initiatives/:slug", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;

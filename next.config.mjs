/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "doodleipsum.com",
        port: "",
        pathname: "/700/avatar",
      },
    ],
  },
};

export default nextConfig;

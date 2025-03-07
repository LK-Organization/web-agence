/** @type {import('next').NextConfig} */
import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w3layouts.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "asset.gecdesigns.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "weblium.com",
      },
    ],
  },
};
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);

import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const withPWA = require("next-pwa")({
  dest: "public",
  register: false,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https?.*\.(png|jpg|jpeg|svg|gif|woff2)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: /^https?.*\/api\/.*$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "api",
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 60 * 60, // 1 hour
        },
      },
    },
  ],
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = withPWA({
  images: {
    domains: ["i.pravatar.cc"], // Add your external image domain here
  },
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Robots-Tag",
          value: "index, follow",
        },
      ],
    },
  ],
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    optimizePackageImports: [
      "@nextui-org/react",
      "react-apexcharts",
      "@heroui/react",
    ],
  },
  webpack: (config: Configuration) => {
    config.optimization = config.optimization || {};
    config.optimization.splitChunks = {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|next|@nextui-org|@heroui|react-apexcharts)[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    };
    return config;
  },
});

export default nextConfig;

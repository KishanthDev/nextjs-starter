import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc"],
  },
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
  headers: async () => [
    {
      source: "/dashboard",
      headers: [
        {
          key: "Cache-Control",
          value: "private",
        },
      ],
    },
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
};

export default nextConfig;
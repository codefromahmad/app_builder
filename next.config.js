/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "bstudio-assets.azureedge.net",
      "builderbuckets.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;

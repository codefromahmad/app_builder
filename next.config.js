/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "bstudio-assets.azureedge.net",
      "builderbuckets.blob.core.windows.net",
      "firebasestorage.googleapis.com",
      "www.ascii-code.com",
      "launchswift.io",
    ],
  },
};

module.exports = nextConfig;

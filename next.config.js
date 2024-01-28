/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "de", "fr"],
    defaultLocale: "en",
  },

  images: {
    domains: [
      "bstudio-assets.azureedge.net",
      "builderbuckets.blob.core.windows.net",
    ],
  },
};

module.exports = nextConfig;

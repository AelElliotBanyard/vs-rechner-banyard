/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['de-DE', 'en-GB', 'fr-FR'],
    defaultLocale: "de-DE",
  },
}

module.exports = nextConfig

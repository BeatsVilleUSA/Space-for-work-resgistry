/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'KasmVilleUSA',
    description: 'KASM inspired Spaces for work produced by BeatsvilleUsa.',
    icon: '/img/logo.svg',
    listUrl: 'https://avatars.githubusercontent.com/u/62388634?v=4'/,
    contactUrl: ''https://github.com/beatsvilleusa/notifications
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

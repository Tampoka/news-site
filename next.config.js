/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["www.j-cast.com"],
        deviceSizes: [320, 640, 860, 1000]
    },
    distDir: "build",
    defaultLocale: "ja"
}

module.exports = nextConfig

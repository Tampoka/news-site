/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["ichef.bbci.co.uk"],
        deviceSizes: [320, 640, 860, 1000]
    },
    distDir: "build"
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["images.pexels.com", "www.patterns.dev", "mobisoftinfotech.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig

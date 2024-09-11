/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "https://dev-tourmaster-bucket.s3.ap-southeast-1.amazonaws.com",
            "s3-alpha-sig.figma.com",
            "www.w3.org",
        ],
        disableStaticImages: false,
        remotePatterns: [
            {
            protocol: "https",
            hostname: "**",
            },
        ],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true }}],
        })
        return config;
    },
};

export default nextConfig;

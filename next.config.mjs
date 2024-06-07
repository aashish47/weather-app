/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "openweathermap.org",
                port: "",
                pathname: "/img/wn/**",
            },
        ],
    },
};

export default nextConfig;

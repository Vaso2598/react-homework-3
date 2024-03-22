/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "a0.muscache.com",
				port: "",
			},
		],
	},
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: '/github_actions',
	output: 'out', // <=== enables static exports
	reactStrictMode: true,
};

export default nextConfig;

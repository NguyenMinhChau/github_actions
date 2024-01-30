/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'production',
	basePath: '/github_actions',
	output: 'export', // <=== enables static exports
	reactStrictMode: true,
};

export default nextConfig;

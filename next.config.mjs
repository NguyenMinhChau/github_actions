/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'build',
	basePath: '/github_actions',
	output: 'export', // <=== enables static exports
	reactStrictMode: true,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const nextConfig = {
	output: 'export',
	basePath: isGithubPages ? '/jacquieg81.github.io' : '',
  	assetPrefix: isGithubPages ? '/jacquieg81.github.io/' : '',
	eslint: {
		ignoreDuringBuilds: true,
	},
	devIndicators: false,
	images: { unoptimized: true },
	webpack: (config, { isServer }) => {
		// Disable cache for both client and server builds
		config.cache = false;
		return config;
	},
	// Add experimental features to handle client pages properly
	experimental: {
		appDir: true,
		serverActions: true
	}
};

module.exports = nextConfig;


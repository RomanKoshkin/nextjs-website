const headers = [
	{
		key: 'Content-Security-Policy',
		value:
			"default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'unsafe-inline' 'self' https://www.googletagmanager.com https://www.google-analytics.com; img-src 'self' data:; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com",
	},
	{ key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
	{ key: 'X-Frame-Options', value: 'DENY' },
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	{ key: 'X-DNS-Prefetch-Control', value: 'on' },
	{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
	{ key: 'Permissions-Policy', value: 'geolocation=()' },
]

module.exports = {
	images: {
		domains: [
			'roman-koshkin.unit.oist.jp', // use next js for resizing mechanism on experemental version of the size
			// 'i.scdn.co', // Spotify Albums Covers
			// 'images.unsplash.com'
		],
	},
	headers() {
		if (process.env.NODE_ENV !== 'production') {
			return []
		}

		return [
			{ source: '/', headers },
			{ source: '/:path*', headers },
		]
	},
	redirects() {
		const { posts } = require('./scripts/get-blog-frontmatters')

		const externalPosts = posts
			.filter((p) => p.original?.external)
			.map((p) => ({ source: `/blog/${p.slug}`, destination: p.original.url, permanent: false }))

		return [
			{
				source: '/calendar',
				destination: 'https://calendly.com/akellbl4/chat-with-paul',
				permanent: false,
			},
			{
				source: '/resume',
				destination: '/resume-2022.pdf',
				permanent: false,
			},
			...externalPosts,
		]
	},
	webpack(config, { dev, isServer }) {
		if (isServer) {
			require('./scripts/generate-sitemap')
			require('./scripts/generate-rss')
		}

		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			})
		}

		return config
	},
}

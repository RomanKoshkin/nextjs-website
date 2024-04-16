import Head from 'next/head'
import { SWRConfig } from 'swr'
import type { AppProps } from 'next'

import 'styles.css'
import { fetcher } from 'lib/api'
import { composeMeta } from 'lib/meta'
import { Container } from 'components/Container'
import {ThemeProvider} from 'next-themes'
import { Analytics } from "@vercel/analytics/react"



import React from "react";


export default function MyApp({ Component, pageProps, router }: AppProps) {
	const [path] = router.asPath.split('?')
	const meta = composeMeta(path, pageProps.meta, Component.meta)

	if (typeof window !== 'undefined' && document.body.classList.contains('preload-transitions')) {
		document.body.classList.remove('preload-transitions')
	}

	return (
		<SWRConfig value={{ fetcher }}>
			<Head>
				<meta name="viewport" content="width=device-width" />
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />
				<meta property="og:url" content={meta.url} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={`${meta.baseUrl}${meta.sharingImageUrl}`} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:site_name" content={meta.name} />
				<meta name="twitter:site" content={meta.twitterAccount} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="author" content={meta.name} />
				<link href={meta.canonical} rel="canonical" />
				{meta.date && <meta property="article:published_time" content={meta.date} />}
			</Head>
			<ThemeProvider attribute='class'>
				<Container isHome={path === '/'}>
					<Component {...pageProps} router={router} />
          <Analytics/>
					{/* <div className="flex flex-row items-center justify-center mb-10 w-full">
      					<AnimatedTooltip items={people} />
    				</div> */}
				</Container>
				
			</ThemeProvider>
		</SWRConfig>
	)
}


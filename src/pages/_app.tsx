import Head from 'next/head'
import { SWRConfig } from 'swr'
import type { AppProps } from 'next'

import 'styles.css'
import { fetcher } from 'lib/api'
import { composeMeta } from 'lib/meta'
import { Container } from 'components/Container'
import {ThemeProvider} from 'next-themes'



import React from "react";
// import { AnimatedTooltip } from "../components/ui/animated-tooltip";
// const people = [
//   {
//     id: 1,
//     name: "John Doe",
//     designation: "Software Engineer",
//     image:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   },
//   {
//     id: 2,
//     name: "Robert Johnson",
//     designation: "Product Manager",
//     image:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     designation: "Data Scientist",
//     image:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     designation: "UX Designer",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 5,
//     name: "Tyler Durden",
//     designation: "Soap Developer",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   },
//   {
//     id: 6,
//     name: "Dora",
//     designation: "The Explorer",
//     image:
//       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
//   },
// ];

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
					{/* <div className="flex flex-row items-center justify-center mb-10 w-full">
      					<AnimatedTooltip items={people} />
    				</div> */}
				</Container>
				
			</ThemeProvider>
		</SWRConfig>
	)
}


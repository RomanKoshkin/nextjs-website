import clsx from 'clsx'
import { Link } from 'components/Link'
import { NowPlaying } from 'components/NowPlaying'
import { ActiveLink } from 'components/ActiveLink'

import { useTheme } from 'next-themes'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

type Props = React.PropsWithChildren<{
	isHome: boolean
}>

export function Container({ children, isHome }: Props) {
	const {theme, setTheme} = useTheme()

	// this is called by onClick
	function changeTheme(theme: any) {
		setTheme(theme === 'light' ? 'dark': 'light')
	}

	return (
		<>
			<div
				className={clsx(
					'h-full w-full  m-auto p-6 flex-grow flex flex-col max-w-3xl lg:max-w-4xl',
					isHome && 'max-h-[44rem]'
				)}
			>
				<header>
					<div className="container">
						<div className="align-left"> 
					<a href="#skip" className="sr-only focus:not-sr-only">
						Skip to content
					</a>
					<nav className="text-sm sm:text-base">
						<ul className="flex w-full space-x-4">
							<li className="nav-link transition-opacity opacity-80 hover:opacity-100">
								<ActiveLink href="/blog">Blog</ActiveLink>
							</li>
							<li className="nav-link transition-opacity opacity-80 hover:opacity-100">
								<ActiveLink href="/research">Research</ActiveLink>
							</li>
							<li className="nav-link transition-opacity opacity-80 hover:opacity-100">
								<ActiveLink href="/projects">Projects</ActiveLink>
							</li>
							<li className="nav-link transition-opacity opacity-80 hover:opacity-100">
								<ActiveLink href="/publications">Publications & Patents</ActiveLink>
							</li>
							<li className="nav-link transition-opacity opacity-80 hover:opacity-100">
								<ActiveLink href="/about">About</ActiveLink>
							</li>
							{!isHome && (
								<li className="nav-link transition-opacity opacity-80 hover:opacity-100">
									<ActiveLink href="/">Home</ActiveLink>
								</li>
							)}
						</ul>
					</nav>
					</div>
					<div style={{ display: 'flex', justifyContent: 'flex-end' }}
						className="light:bg-white text-dark dark:text-white"
									onClick={() => changeTheme(theme)}>
									{theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
					</div>

				</div>
				</header>
				<main id="skip" className="flex flex-col flex-grow py-12">
					{children}
				</main>
				<footer className="flex mb-4 text-sm sm:text-base flex-col justify-between sm:flex-row sm:items-end">
					<ul className="flex flex-wrap flex-shrink-0 max-w-full mr-6">
						{SOCIAL_LINK.map(([emoji, label, href]) => (
							<li key={label} className="mr-4 mt-2">
								<Link
									href={href}
									data-emoji={emoji}
									className="link-emoji relative inline-block text-gray-500 dark:text-gray-300 transition-colors duration-200 border-b dark:border-gray-700 hover:text-transparent hover:border-transparent"
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
					<section className="max-w-full overflow-hidden p-1 -m-1 mt-4 mr-auto sm:mr-0 sm:mt-0">
						<NowPlaying />
					</section>
				</footer>
			</div>
		</>
	)
}

const SOCIAL_LINK = [
	// ['👤', 'Facebook', 'https://www.facebook.com/akellbl4'],
	['👨‍🎓', 'Scholar', 'https://scholar.google.com/citations?hl=en&user=OpQXH3cAAAAJ&view_op=list_works&sortby=pubdate'],
	['🐦', 'Twitter', 'https://twitter.com/nightdude4'],
	['🐙', 'GitHub', 'https://github.com/RomanKoshkin'],
	['👨‍💻', 'LinkedIn', 'https://www.linkedin.com/in/romankoshkininterpreter/'],
]

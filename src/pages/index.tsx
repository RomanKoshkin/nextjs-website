import Image from 'next/image'

import { Link } from 'components/Link'

import avatar from '@public/images/avatar.png'
import photo from '@public/images/photo.jpg'

export default function Home() {
	return (
		<article className="my-auto pt-2">
			<Link href="/about" className="inline-block text-gray-800">
				<h1 className="title relative inline-flex flex-col-reverse sm:flex-row mb-3">
					<div className="relative inline-block text-4xl sm:text-7xl md:text-8xl lg:text-8xl font-bold tracking-tight">
						<span className="title-gradient">Roman Koshkin</span>
						<span className="title-cover absolute inset-0 transition-opacity duration-500">
							Roman Koshkin
						</span>
					</div>
					<div className="relative flex w-10 h-10 mb-2 sm:w-16 sm:h-16 sm:-mt-10">
						<div className="avatar absolute inset-0 h-full w-full flex rounded-full overflow-hidden">
							<Image
								src={avatar}
								width={64}
								height={64}
								priority
								loading="eager"
								alt="Roman Koshkin"
								placeholder="blur"
							/>
						</div>
						<div className="photo h-full w-full flex rounded-full overflow-hidden">
							<Image
								src={photo}
								width={64}
								height={64}
								priority
								loading="eager"
								alt="Roman Koshkin"
								placeholder="blur"
							/>
						</div>
					</div>
				</h1>
			</Link>

			<p className="block text-md w-[80%] md:w-[85%] sm:text-xl font-medium sm:leading-relaxed text-gray-400">
				PhD student @ <Link href="https://oist.jp" className="transition-color duration-300 hover:text-gray-600 dark:hover:text-gray-200">OIST</Link> |{' '}
				<Link href="/projects" className="transition-color duration-300 hover:text-gray-600 dark:hover:text-gray-200">Computational Neuroscience</Link> |{' '} 
				<Link href="/projects" className="transition-color duration-300 hover:text-gray-600 dark:hover:text-gray-200">NLP</Link> |{' '}
				<Link href="/projects" className="transition-color duration-300 hover:text-gray-600 dark:hover:text-gray-200">Simultaneous Machine Translation</Link>
				{/* <span className="transition-color duration-300 hover:text-gray-600 dark:hover:text-gray-200">
				</span>{' '} */}
				{/* I am a computational neuroscience PhD student at the <Link href="https://oist.jp" className="transition-color duration-300 hover:text-gray-600 dark:hover:text-gray-200"> Neural Coding and Brain Computing Unit</Link> (OIST), which I joined with a vision of building next-gen AI systems that rival the speed and efficiency of biological brains. I am also interested (as a linguist in my previous life) in multi-agent reasoning and simultaneous machine translation. I love making things that work. */}
				{/* I am a PhD student at OIST. My research spans biologically-plausible models of the brain and LLM-based simultaneous machine translation.  */}
				{/* <br className="hidden md:inline" />
				<span className="transition-color duration-300 hover:text-gray-600 dark:hover:text-gray-200">
				I <Link
				 href="/about#projects" 
				 className="border-b dark:border-gray-600 dark:hover:border-gray-400"
				 >
					 study{' '}
				</Link>
				 the principles of neural computation and how they can be used in next-generation AI. {' '}Check out more about me here and in my <Link href="/blog" className="border-b dark:border-gray-600 dark:hover:border-gray-400">
					 blog
				</Link>.
				</span> */}
			</p>
		</article>
	)
}

Home.meta = {
	title: 'Roman Koshkin - Computational Neuroscience, Bio-inspired AI, Deep Learning',
	overrideTitle: true,
}

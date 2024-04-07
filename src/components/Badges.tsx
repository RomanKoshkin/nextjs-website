import { motion } from 'framer-motion'

const animations = {
	initial: {opacity: 0},
	animate: {opacity: 1},
	exit: {opacity: 0},

}

// https://www.youtube.com/watch?v=pTinipkJBcs
// https://www.framer.com/docs/animate-presence/
export function AbstractText({ abstract }: any) {
	return (
		<motion.div 
			variants={animations} 
			initial='initial' 
			animate='animate' 
			exit='exit'
		>
			<i>{abstract}</i>
		</motion.div>
	)
}


export function AbstractBadge() {
	return (
		<span 
		className="inline-flex items-center uppercase font-medium text-base 
		text-gray-600 
		bg-gray-200 
		dark:hover:bg-yellow-400 
		hover:bg-yellow-400 
		dark:bg-gray-400
		dark:text-gray-900 
		px-2 rounded
		cursor-pointer
		user-select-none"
		style={{transition: "all .5s"}}>
			{"Abstract"}
		</span>
	)
}

export function PDFBadge() {
	return (
		<span 
		className="inline-flex items-center uppercase font-medium text-base 
		text-gray-600 bg-gray-200 
		dark:hover:bg-yellow-400 
		hover:bg-yellow-400 
		dark:bg-gray-400 
		dark:text-gray-900
		px-2 ml-2
		rounded
		cursor-pointer
		user-select-none"
		style={{
			transition: "all .5s"}}>
			{"PDF"}
		</span>
	)
}

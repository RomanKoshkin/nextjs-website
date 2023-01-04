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

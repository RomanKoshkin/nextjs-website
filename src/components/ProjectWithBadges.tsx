import { Link } from 'components/Link'



type Props = React.PropsWithChildren<{
	url: string
	title: string
	children: string
	badges: string[] // Adding a prop for badges
  }>
  
  export function ProjectWithBadges({ url, title, children, badges }: Props) {
	return (
	  <section className="project relative block px-4 py-3 -mx-3 sm:mx-0 sm:px-6 sm:py-5 border border-gray-100 dark:border-gray-700 rounded-lg transition-shadow duration-200 hover:shadow-xl dark:transform dark:transition-transform dark:hover:-translate-y-1">
		<h3 className="flex items-center mb-2 text-xl font-bold">
		  <Link href={url} className="block-link">
			{title}
		  </Link>
		  <svg
			className="ml-auto w-6 h-6 opacity-60"
			dangerouslySetInnerHTML={{ __html: `<use xlink:href="#github-icon"></use>` }}
		  />
		</h3>
		<p className="line-clamp-3">{children}</p>
		{/* Badge container */}
		<div className="mt-4 flex gap-2">
		  {badges.map(badge => (
			<span key={badge} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
			  {badge}
			</span>
		  ))}
		</div>
	  </section>
	)
  }
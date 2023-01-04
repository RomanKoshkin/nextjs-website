import { LangBadge } from './LangBadge'

type Props = React.PropsWithChildren<{
	title: string
	authors: string
	conference: string
	date: string
	place: string
	lang?: string
}>

export function Presentation({ title, authors, conference, date, place, lang, children }: Props) {
	return (
		<section>
			<div>
				<span>
					{lang && (
						<span className="order-2 self-start ml-auto sm:order-none sm:ml-0 sm:mr-2">
							<LangBadge lang={lang} />{' '}
						</span>
					)}
				</span>
				<b>{title}</b>
			</div>
			<div>
				{authors}
			</div>
			<div>
				{date}{',  '}{place}
			</div>
			<p>{children}</p>
		</section>
	)
}

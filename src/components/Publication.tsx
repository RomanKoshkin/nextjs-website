import { LangBadge } from './LangBadge'
import { PDFBadge, AbstractBadge } from './Badges'
import {useState} from 'react'

type Props = React.PropsWithChildren<{
	title: string
	lang?: string
	journal: string
	year: string
	authors: string
	issue: string
	pageRange: string
	abstract?: string
}>

export function Publication({ title, lang, journal, year, authors, issue, pageRange, abstract, children }: Props) {
	const [abstractVisible, setAbstractVisible] = useState(false)

	function onClick() {
		abstractVisible ? setAbstractVisible(false) : setAbstractVisible(true);
	}

	return (
		<section>
			<span>
				{lang && (
					<span className="order-2 self-start ml-auto sm:order-none sm:ml-0 sm:mr-2">
						<LangBadge lang={lang} />{' '}
					</span>
				)}
				<b>{authors}</b>{' ('}{year}{') '}{title}{' '}<i>{journal}</i>{' '}<b>{issue}</b>{':'}{pageRange}{'.'}
			</span>
			<p>{children}</p>
			{ abstract ? <span onClick={onClick}><AbstractBadge/></span>: null }
			{ abstract ? <span><PDFBadge/></span>: null }
			{ abstractVisible ? <div><i>{abstract}</i></div>: null }
		</section>
	)
}

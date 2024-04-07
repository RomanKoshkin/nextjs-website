import { LangBadge } from './LangBadge'
import { PDFBadge, AbstractBadge, AbstractText } from './Badges'
import {useState, useEffect} from 'react'

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

export function Publication({
    title,
    lang,
    journal,
    year,
    authors,
    issue,
    pageRange,
    abstract,
    children,
}: Props) {
    const [abstractVisible, setAbstractVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(abstractVisible);

    useEffect(() => {
        if (abstractVisible) setShouldRender(true);
    }, [abstractVisible]);

    const onTransitionEnd = () => {
        if (!abstractVisible) setShouldRender(false);
    };

    const onClick = () => {
        setAbstractVisible(!abstractVisible);
    };

    const abstractStyle = {
        transition: 'opacity 0.5s ease, max-height 0.5s ease',
        maxHeight: abstractVisible ? '500px' : '0', // Adjust max-height for your content
        overflow: 'hidden',
        opacity: abstractVisible ? 1 : 0,
    };

    return (
        <section style={{ marginBottom: '20px' }}>
            <span>
                {lang && (
                    <span className="order-2 self-start ml-auto sm:order-none sm:ml-0 sm:mr-2">
                        <LangBadge lang={lang} />{' '}
                    </span>
                )}
                <b>{authors}</b> ({year}) {title} <i>{journal}</i> <b>{issue}</b>:{pageRange}.
            </span>
            <p>{children}</p>
            {abstract ? (
                <span onClick={onClick}>
                    <AbstractBadge />
                </span>
            ) : null}
            {abstract ? <span><PDFBadge /></span> : null}
            {shouldRender && (
                <div style={abstractStyle} onTransitionEnd={onTransitionEnd}>
                    <AbstractText abstract={abstract} />
                </div>
            )}
        </section>
    );
}

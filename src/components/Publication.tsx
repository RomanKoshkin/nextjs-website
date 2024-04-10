import { LangBadge } from './LangBadge'
import { PDFBadge, AbstractBadge, AbstractText } from './Badges'
import { useState, useEffect, useRef } from 'react';

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
    const [maxHeight, setMaxHeight] = useState('0px');
    const abstractRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (abstractVisible && abstractRef.current) {
            // Dynamically set maxHeight for the transition when abstract is visible
            setMaxHeight(`${abstractRef.current.scrollHeight}px`);
        } else {
            setMaxHeight('0px'); // Reset maxHeight to enable smooth collapse
        }
    }, [abstractVisible, abstractRef.current?.scrollHeight]);

    const onClick = () => {
        setAbstractVisible(!abstractVisible);
    };

    const abstractStyle = {
        transition: 'opacity 0.5s ease, max-height 0.5s ease',
        maxHeight: abstractVisible ? maxHeight : '0', // Use dynamic maxHeight for smooth animation
        overflow: 'hidden',
        opacity: abstractVisible ? 1 : 0,
    };

    return (
        <section style={{ marginBottom: '20px' }}>
            <span className="transition-opacity opacity-80 hover:opacity-100">
                {lang && (
                    <span className="order-2 self-start ml-auto sm:order-none sm:ml-0 sm:mr-2">
                        <LangBadge lang={lang} />{' '}
                    </span>
                )}
                <b>{authors}</b> ({year}) {title} <i>{journal}</i> <b>{issue}</b>:{pageRange}.
            </span>
            <p>{children}</p>
            {abstract && (
                <span onClick={onClick}>
                    <AbstractBadge />
                </span>
            )}
            {abstract && <span><PDFBadge /></span>}
            <div style={abstractStyle} ref={abstractRef}>
                {abstract && <AbstractText abstract={abstract} />}
            </div>
        </section>
    );
}

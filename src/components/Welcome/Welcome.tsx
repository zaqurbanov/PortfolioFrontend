import React, { type JSX } from 'react'

const renderText = (text: string = "salam", className: string = "text-xl", baseWeight: number = 400): JSX.Element[] => {


    return [...text].map((char: string, index: number) => <span key={index} className={className}
        style={{ fontVariationSettings: `whgt ${baseWeight}` }}
    >{char == " " ? '\u00A0' : char}</span>)

}
const Welcome = () => {
    const titleRef = React.useRef<HTMLHeadingElement>(null)
    const subtitleRef = React.useRef<HTMLParagraphElement>(null)


    return (
        <section id='welcome'>
            <p ref={subtitleRef}>{renderText("Welcome My", "text-xl md:text-3xl font-georama")}</p>
            <h1 ref={titleRef} className='mt-9 '>{renderText("Portfolio", "text-5xl md:text9xl font-bold italic")}</h1>
            
        </section>
    )
}

export default Welcome

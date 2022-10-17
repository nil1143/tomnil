import React from "react"

export default function Hero() {
    return(
        <section className="hero" id='hero'>
            <div className="hero--info">
            <h1 className="hero--header">Tom Nil</h1>
            <p className="hero--paragraph">I am fresh front-end developer! Welcome to my React-Hero-Page and check out my projects!!!</p>
            <div className="styled-break"></div>
            <div className='hero-buttons'>
            <div className="button"><a className='hero-but' href='https://www.github.com' target="_blank" rel='noreferrer'>Projects</a></div>
            <div className="button2"><a className='hero-but' href='#contact-me'>Get in touch</a></div>
            </div>
            </div>
            <img alt='pic'src="../images/working-man2.png" className="hero--photo" />
            
        </section>
    )
}
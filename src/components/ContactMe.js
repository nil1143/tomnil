import React from 'react'

export default function ContactMe() {



    return(
        <section className='contact-me' id='contact-me'>
            <div className='left-side-section'>
                <h2 className='contact-me-header'>Get in touch</h2>
                <p className='contact-me-paragraph'>If you interested about a project collaboration or you simply want to ask me a question,
                     feel free to fill up the form or just send me an e-mail to <span className='boldy'>tnil1143@gmail.com</span></p>
                <div className='icons'>
                    <a href="https://google.com"><i className="fa-brands fa-square-github contact-me-links"></i></a>      
                    <a href='https://google.com'><i className="fa-brands fa-linkedin contact-me-links"></i></a>
                    <a href='https://google.com'><i className="fa-brands fa-square-twitter contact-me-links"></i></a>
                    <a href='https://google.com'><i className="fa-solid fa-envelope contact-me-links"></i></a>
                </div>
            </div>    
            <form className="contact-me-form">
                <div className="contact-me-input">
                    <label for="full-name">Full name</label>
                    <input className='input-type' type='text' id='full-name' placeholder='Enter your name'></input>
                </div>
                <div className="contact-me-input">
                    <label for="email" >Email</label>
                    <input className='input-type' type='text' id='email' placeholder='Enter your email adress'></input>
                </div>
                <div className="contact-me-input">
                    <label for="message" >Message</label>
                    <textarea className='input-message' type='text' placeholder='Tell me what you think...'id='message'></textarea>
                </div>
                <div className="button">Send</div>
            </form>
        </section>
    )
}
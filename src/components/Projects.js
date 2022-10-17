import React from 'react'

export default function Projects() {
    return (
        <section className='projects-section' id='projects'>
                <h2 className="about-me-header">Projects</h2>
                <div className="header-styled-break2"></div>
            <main className="projects-row">
                <div className="project-container">
                    <img src='images/minatures/coffeeWebMin1.png' className='project-img' alt='1' ></img>
                    <h3 className='project-title'>First UI project</h3>
                    <h4 className='technology-used'>Technology used: 
                    </h4>
                    <div className='tech-icons'>
                        <i class="fa-brands fa-html5"></i> HTML
                        <i class="fa-brands fa-css3-alt"></i> CSS 
                    </div>
                    <p>info paragraph</p>
                </div>
                <div className="project-container">   
                    <img src='images/minatures/weaAppMin.png' className='project-img' alt='1' ></img>
                    <h3 className='project-title'>Weather App</h3>
                    <h4 className='technology-used'>Technology used:
                    <div className='tech-icons'>
                        <i class="fa-brands fa-html5"></i> HTML
                        <i class="fa-brands fa-css3-alt"></i> CSS
                        <i class="fa-brands fa-js"></i> JS
                    </div>
                    </h4> 
                    
                   
                    <p>info paragraph</p>             
                </div>
                <div className="project-container"> 
                    <img src='images/minatures/travelJournalMin1.png' className='project-img' alt='1'></img>
                    <h3 className='project-title'>Travel Journal API</h3>
                    <div className='tech-icons'>
                    <h4 className='technology-used'>Technology used:</h4>
                    </div>
                    <p>info paragraph</p>             
                    </div>
                <div className="project-container">
                    <img src='images/minatures/coffeeWebMin1.png' className='project-img' alt='1'></img>
                    <h3 className='project-title'>Meme generator</h3>
                    <h4 className='technology-used'>Technology used:</h4>
                    <div className='tech-icons'>
                    
                    </div>
                    <p>info paragraph</p>                
                </div>
                <div className="project-container">
                    <img className='project-img' alt='1'></img>
                    <h3 className='project-title'>AirBnB mobile clone API</h3>
                    <div className='tech-icons'>
                    <h4 className='technology-used'>Technology used:</h4>
                    </div>
                    <p>info paragraph</p>     
                </div>
            </main>
        </section>
    )
}
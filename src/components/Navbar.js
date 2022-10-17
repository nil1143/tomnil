import React from "react"
export default function Navbar() {
    return(
        // <div className="navbar">
        //    <img className="logo" src="../images/icon.png" />
        // </div>
        <nav id='nav'>
        <img  className="logo" src="images/WebCoffeee.png" alt="logo"></img>
        <ul className="nav--bar" id="nav-list">
            <li><a className="nav-links" href='#aboutme'>About me</a></li>
            <li><a className="nav-links" href="#projects">Projects</a></li>
            <li><a className="nav-links" href="#contact-me">Contact Me</a></li>
        </ul>
        </nav>
    )
}
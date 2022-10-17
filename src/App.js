import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
// import About from "./components/About"
// import Contacts from "./components/Contacts"
import Card from "./components/Card"
import Projects from "./components/Projects"
import ContactMe from "./components/ContactMe"
// import data from "./data"
// import MapJournal from "./components/MapJournal"
import Footer from "./components/Footer"




export default function App() {

    return (
        <div className="container">
        <Navbar />
        <Hero />
        <Card /> 
        <Projects />
        <ContactMe />
        <Footer />
        {/* <MapJournal /> */}
        </div>
    )
}

 



    // const mapJournal = data.map(item => {
    //     return (
    //         <Journal
    //         key={item.id}
    //         {...item}
    //         />
    //     )
    // })

            {/* <section className="journal-section">
            <div className="bar">
                <p className="headerr"><i className="fa-solid fa-earth-americas"></i> my travel journal.</p>
            </div>
            {mapJournal}
            </section>        */}
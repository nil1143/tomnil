import React from "react"
export default function Card() {
    return(
        
        <section className="about--me" id='aboutme'>
                <h2 className="about-me-header">About me</h2>
                <div className="header-styled-break2"></div>
            <div className="card">
            <div className='about-me-third-row'>
                    <div className='about-me-details'>
                        <label><span className='boldy'>Name:</span> Tomasz</label>
                        <label><span className='boldy'>Age:</span> 29</label>            
                        <label><span className='boldy'>Location:</span> Limerick, Ireland</label>
                        <div className="link-buttons">
                        <a><i className="fa-solid fa-bell about-me-links"></i></a>
                        <a><i className="fa-brands fa-github about-me-links"></i></a>
                        <a><i className="fa-brands fa-linkedin-in about-me-links"></i></a>
                        <a><i className="fa-regular fa-envelope about-me-links"></i></a>
                        </div> 
                    </div>    

            </div>      
            <div className='header-styled-break3'></div>  
            <div className='about-me-right'>
            <img  className="avatar" alt='avatar' src="images/tomloki-avatar.jpg"></img>
            <p className='txt boldy'>Hello, my name is Tom. Born and raised in Poland. I am self-taught front-end developer. I discovered my passion for website development when handled course in college in Ireland. </p> 
            </div>
            </div>
        </section>
    )}



//
//  TESTS //

//     const nums = [1, 4, 9, 16];

// // pass a function to map
// // const map1 = nums.map(x => x * x);
// const map1 = nums.map(function(item) {
//     return item * item
// })
// console.log(map1);
// //

// const names = ['tom', 'cinek', 'woj', 'maciek']

// const uppercase = names.map(item => item[0].toUpperCase()+ item.slice(1))

// console.log(uppercase);
// //

// const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle']
// const elements = pokemon.map(mon => `<p>${mon}</p>`
// )

// console.log(elements);

//  import React from "react"
// export default function Card() {
//     return(
        
//         <section className="about--me">
//                 <h2 className="about-me-header">About me</h2>
//                 <div className="header-styled-break2"></div>
//             <div className="card">
//                 <p className='txt'>Hello, my name is Tom. Born and raised in Poland. I am self-taught front-end developer. I discovered my passion for website development when handled course in college in Ireland. </p>
//                 <img  className="avatar" alt='avatar' src="images/tomloki-avatar.jpg"></img>
//                 <div className='about-me-third-row'>
//                     <div className='about-me-details'>
//                         <label><span className='boldy'>Name:</span> Tomasz</label>
//                         <label><span className='boldy'>Age:</span> 29</label>            
//                         <label><span className='boldy'>Location:</span> Limerick, Ireland</label>
         
//                     </div>
//                         </div>
                    
//                 </div>
//                         <div className="link-buttons">
//                         <a><i className="fa-solid fa-bell about-me-links"></i></a>
//                         <a><i className="fa-brands fa-github about-me-links"></i></a>
//                         <a><i className="fa-brands fa-linkedin-in about-me-links"></i></a>
//                         <a><i className="fa-regular fa-envelope about-me-links"></i></a>
//                     </div>
//             </div>
//         </section>
//     )}
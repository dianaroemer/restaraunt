console.log("Bollocks");


// import myName from './landing.js';
import landing from './landing.js';
import './style.css';


const hamburgerMenuContainer = document.createElement('div');
hamburgerMenuContainer.classList.add('hamburger-menu-container');
hamburgerMenuContainer.innerHTML = "Bollocks"
document.getElementById('content-container').insertBefore(hamburgerMenuContainer, document.getElementById('content') );

// const hamburgerMenuContainer2 = document.createElement('div');
// hamburgerMenuContainer2.classList.add('hamburger-menu-container-2');
// hamburgerMenuContainer2.innerHTML = "Bollocks"
// document.getElementById('content-container').insertBefore(hamburgerMenuContainer2, document.getElementById('content') );


document.getElementById('content').appendChild(landing());



// function component() {
//     const element = document.createElement('div');
//     // const btn = 

//     element.innerHTML = myName('Wonkers');
//     element.classList.add('hi');
    
//     return element;
// }
// document.body.appendChild(component());


// document.body.removeChild(document.getElementById('content'));







// document.body.appendChild(landing());


// TO DO
// establish tab switching functionality on index.js
// Rebuild landing / front page
// Build menu page
// Build contact page
// build CSS so content can just be plug & played



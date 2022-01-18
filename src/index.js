console.log("Bollocks");


// import myName from './landing.js';
import landing from './landing.js';
import './style.css';

import HomeImage from './assets/home.png'
import MenuImage from './assets/menu.png'
import ContactImage from './assets/contact.png'



const hamburgerMenuContainer = document.createElement('div');
hamburgerMenuContainer.classList.add('hamburger-menu-container');
// hamburgerMenuContainer.innerHTML = "Bollocks"
document.getElementById('content-container').insertBefore(hamburgerMenuContainer, document.getElementById('content') );


const homeImage = document.createElement('img');
homeImage.classList.add('hamburger-image');
homeImage.id = "home-image"
homeImage.src = HomeImage;
homeImage.alt = "An image of a house, indicating home";
// homeImage.classList.toggle('selected');
hamburgerMenuContainer.appendChild(homeImage);

const menuImage = document.createElement('img');
menuImage.classList.add('hamburger-image');
menuImage.id = "menu-image"
menuImage.src = MenuImage;
menuImage.alt = "An image of a fork and knife, indicating menu";
hamburgerMenuContainer.appendChild(menuImage);

const contactImage = document.createElement('img');
contactImage.classList.add('hamburger-image');
contactImage.id = "contact-image"
contactImage.src = ContactImage;
contactImage.alt = "An image of a phone, indicating navigation to the Contact page";
hamburgerMenuContainer.appendChild(contactImage);







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



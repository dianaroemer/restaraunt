
// import myName from './landing.js';
import landing from './landing.js';
import './style.css';

import HomeImage from './assets/home.png'
import MenuImage from './assets/menu.png'
import ContactImage from './assets/contact.png'









// const gameBoard = (() => {

//     let _gameBoard = ["", "", "", "", "", "", "", "", ""];

//     // Returns current gameBoard
//     const getInfo = () => {
//         return _gameBoard;
//     }

//     return {
//         getInfo,
//         updateGameBoard,
//         resetGameBoard,
//         logBoard, 
//     }
// })();

const displayController = (() => {

    let _sample = "what's happening";

    const _hamburgerMenuContainer = document.createElement('div');
    const _homeImage = document.createElement('img');
    const _menuImage = document.createElement('img');
    const _contactImage = document.createElement('img');

    const init = () => {
        _drawHamburgerMenu()
        _addHamburgerEventListeners();
        _homeImage.classList.toggle('selected');
    }



    const _drawHamburgerMenu = () => {
        _hamburgerMenuContainer.classList.add('hamburger-menu-container');
        // _hamburgerMenuContainer.innerHTML = "Bollocks"
        document.getElementById('content-container').insertBefore(_hamburgerMenuContainer, document.getElementById('content') );
                
        _homeImage.classList.add('hamburger-image');
        _homeImage.id = "home-image"
        _homeImage.src = HomeImage;
        _homeImage.alt = "An image of a house, indicating home";
        // homeImage.classList.toggle('selected');
        _hamburgerMenuContainer.appendChild(_homeImage);
        
        _menuImage.classList.add('hamburger-image');
        _menuImage.id = "menu-image"
        _menuImage.src = MenuImage;
        _menuImage.alt = "An image of a fork and knife, indicating menu";
        _hamburgerMenuContainer.appendChild(_menuImage);
        
        _contactImage.classList.add('hamburger-image');
        _contactImage.id = "contact-image"
        _contactImage.src = ContactImage;
        _contactImage.alt = "An image of a phone, indicating navigation to the Contact page";
        _hamburgerMenuContainer.appendChild(_contactImage);
        
    }

    const _addHamburgerEventListeners = () => {
        let imageArr = [_homeImage, _menuImage, _contactImage];
        imageArr.forEach( element => {
            element.addEventListener('click', () => {
                _setImagesDeselected();
                element.classList.toggle('selected');
            
            })
        })
    }

    const _setImagesDeselected = () => {
        _homeImage.classList.remove('selected');
        _menuImage.classList.remove('selected');
        _contactImage.classList.remove('selected');
    }

    const getInfo = () => {
        console.log('This is displayControllers getInfo() ' + _sample)
        return _sample;
    }

    return {
        init,
        getInfo,
    }

})();


displayController.getInfo();
displayController.init();

console.log(displayController);








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



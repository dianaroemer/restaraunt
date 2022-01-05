console.log("Bollocks");


import myName from './landing.js';



function component() {
    const element = document.createElement('div');
    // const btn = 

    element.innerHTML = myName('Maroun');
    element.classList.add('hi');
    
    return element;
}

document.body.appendChild(component());
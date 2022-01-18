
// Reference module code for creating and exporting a function with a return value for use in another script
// const myName = (name) => {
//     console.log("sup");
//     return 'Hi! My name is ' + name + "!";
// }
// export default myName;

import Logo from './assets/logo.jpg'
import LadleImage from './assets/ladle.png'

const landing = () => {

    const landingContainerElement = document.createElement('div');

    // const content = document.createElement('div');
    landingContainerElement.id = 'landingContainerElement';
    landingContainerElement.style.position = "relative";
    // landingContainerElement.style.top = "70px";
    landingContainerElement.style.display = "flex";
    landingContainerElement.style.justifyContent = "center";

    const boxContainer = document.createElement('div');
    boxContainer.id = "box";
    // boxContainer.style.top = "70px";
    boxContainer.style.textAlign = "center";
    landingContainerElement.appendChild(boxContainer);

    // const logoImage = document.createElement('img');
    // logoImage.classList.add('logo-picture');
    // // logoImage.src = './logo.jpg';
    // logoImage.src = Logo;
    // logoImage.alt = "A blue and white painted saign, saying 'Greek Corner Cafe'";
    // logoImage.style.borderRadius = "50px";
    // boxContainer.appendChild(logoImage);

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name-container');
    boxContainer.appendChild(nameContainer);

    const nameContent = document.createElement('div');
    nameContent.classList.add("name-content");
    nameContent.innerHTML = "Soup and Soup Accessories";
    nameContainer.appendChild(nameContent);

    const ladleImage = document.createElement('img');
    ladleImage.classList.add('ladle-image-right');
    ladleImage.src = LadleImage;
    ladleImage.alt = "An image of a cartoon ladle"
    nameContainer.appendChild(ladleImage);

    const ladleImageLeft = document.createElement('img');
    ladleImageLeft.classList.add('ladle-image-left');
    ladleImageLeft.src = LadleImage;
    ladleImageLeft.alt = "An image of a cartoon ladle"
    nameContainer.appendChild(ladleImageLeft);


    const welcome = document.createElement('h2');
    welcome.classList.add('headLine');
    welcome.innerHTML = 'Welcome to the Soup and Soup Accessories!';
    boxContainer.appendChild(welcome);
    
    const tagline = document.createElement('h3');
    tagline.classList.add('tagline');
    tagline.innerHTML = `Man, this shit's the best in town.`;
    boxContainer.appendChild(tagline);

    const enterButton = document.createElement('button');
    enterButton.classList.add('enterButton');
    enterButton.innerText = "Enter";
    enterButton.style.fontSize = "18px";
    enterButton.style.marginTop = "3px";
    enterButton.style.padding = "6px";
    enterButton.style.borderRadius = "5px";
    enterButton.style.boxShadow = "0px 2px 6px gray";
    boxContainer.appendChild(enterButton);




    return landingContainerElement;

}


export default landing;

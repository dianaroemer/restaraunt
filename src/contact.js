
import generateElement from './utils/helpers.js';

const contact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.id = "contact-container";

    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    contactContent.innerHTML = "Contact soup?"
    contactContainer.appendChild(contactContent);


    const newElement = generateElement('div', 'newElement', 'newElement-class');
    newElement.innerHTML = "Banana nut bananas";
    newElement.innerHTML += "<br>Uh oh spaghettis";
    newElement.innerHTML += `<br> This is a really long string, I wonder if I'll automatically get wrap around with this string or if I'll run off the page and on the background of the webpage.`
    
    // console.log(newElement);
    contactContainer.appendChild(newElement);

    return contactContainer;

}

export default contact;
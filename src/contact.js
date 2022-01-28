
import generateElement from "./utils/helpers";

const contact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.id = "contact-container";

    // const contactContent = document.createElement('div');
    // contactContent.classList.add('contact-content');
    // contactContent.innerHTML = "Contact soup?"
    // contactContainer.appendChild(contactContent);


    // const newElement = generateElement('div', 'newElement', 'newElement-class');
    // newElement.innerHTML = "Banana nut bananas";
    // newElement.innerHTML += "<br>Uh oh spaghettis";
    // newElement.innerHTML += `<br> This is a really long string, I wonder if I'll automatically get wrap around with this string or if I'll run off the page and on the background of the webpage.`
    
    // console.log(newElement);
    // contactContainer.appendChild(newElement);

    const contactContent = generateElement('div', null, 'contact-content');
    contactContent.innerHTML = `You want to contact us? No phone orders. <br>
    If you try to make a custom order or change my soup, then NO SOUP FOR YOU `
    contactContainer.appendChild(contactContent);


    return contactContainer;

}

export default contact;
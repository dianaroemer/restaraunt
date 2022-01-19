

const contact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.id = "contact-container";

    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    contactContent.innerHTML = "Contact soup?"

    contactContainer.appendChild(contactContent);

    return contactContainer;

}

export default contact;
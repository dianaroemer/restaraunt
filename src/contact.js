

const contact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.id = "menu-container";

    const contactContent = document.createElement('div');
    contactContent.classList.add('menu-content');
    contactContent.innerHTML = "Contact soup?"

    contactContainer.appendChild(contactContent);

    return contactContainer;

}

export default contact;
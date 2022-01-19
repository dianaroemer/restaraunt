

const menu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.id = "menu-container";

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuContent.innerHTML = "Menu soup!"

    menuContainer.appendChild(menuContent);

    return menuContainer;

}

export default menu;
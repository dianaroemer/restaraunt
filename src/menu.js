import generateElement from "./utils/helpers";


const menu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.id = "menu-container";

    // const menuContent = document.createElement('div');
    // menuContent.classList.add('menu-content');
    // menuContent.innerHTML = "Menu soup!"

    // menuContainer.appendChild(menuContent);

// Header Signs -----------------------------------------------

    const headerSignsContainer = generateElement('div', null, 'header-signs-container');
    menuContainer.appendChild(headerSignsContainer);

    const headerSignsContent = generateElement('div', null, 'header-signs-content');
    headerSignsContainer.appendChild(headerSignsContent);

    const headerSign1 = generateElement('div', 'header-sign-1', 'header-sign');
    headerSign1.innerHTML = `WE <br>
    reserve the right <br>`;
    const headerSign1Refuse = generateElement('div', 'header-sign-refuse', null);
    headerSign1Refuse.innerHTML = `TO REFUSE SERVICE <br>`;
    headerSign1.appendChild(headerSign1Refuse);
    const headerSign1Anyone = generateElement('div', 'header-sign-anyone', null);
    headerSign1Anyone.innerHTML = `TO ANYONE`;
    headerSign1.appendChild(headerSign1Anyone);

    headerSignsContent.appendChild(headerSign1);

    const headerSign2 = generateElement('div', 'header-sign-2', 'header-sign');
    headerSign2.innerHTML = `SINGLE FILE ONLY <br>
    HAVE CASH READY <br>
    ----------------- <br>`;

    const headerSign2Know = generateElement('div', 'header-sign-know', null);
    headerSign2Know.innerHTML = `KNOW YOUR SOUP <br>`;
    headerSign2.appendChild(headerSign2Know);
    headerSign2.innerHTML += `-----------------`;

    headerSignsContent.appendChild(headerSign2);

// Menu title card -------------------------------------------------------------

    const menuTitleContainer = generateElement('div', null, 'menu-title-container');
    
    const menuTitleContent = generateElement('div', null, 'menu-title-content');
    menuTitleContent.innerHTML = `MENU`;
    menuTitleContainer.appendChild(menuTitleContent);

    
    menuContainer.appendChild(menuTitleContainer);






    return menuContainer;
}

export default menu;
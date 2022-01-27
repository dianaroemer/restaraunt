import generateElement from "./utils/helpers";

import Mulligatawny from "./assets/soup-mulligatawny.jpg";
import BlackBean from "./assets/soup-black-bean.jpg";
import TomatoRice from "./assets/soup-tomato-rice.jpg";

import Jambalaya from "./assets/soup-jambalaya.jpg";
import FrenchOnion from "./assets/soup-french-onion.jpg";
import ClamBisque from "./assets/soup-clam-bisque.jpg";



const menu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.id = "menu-container";


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


// Menu Content ----------------------------------------------------------------

    const menuContent = generateElement('div', null, 'menu-content');

    const menuListContainer = generateElement('div', null, 'menu-list-container');
    menuContent.appendChild(menuListContainer);

    const menuListLeft = generateElement('div', 'menu-list-left', 'menu-list-left');
    menuListContainer.appendChild(menuListLeft);

    const soupMulligatawny = generateElement('img', 'soup-mulligatawny', 'soup-image');
    soupMulligatawny.src = Mulligatawny;
    menuListLeft.appendChild(soupMulligatawny);

    const soupBlackBean = generateElement('img', 'soup-black-bean', 'soup-image');
    soupBlackBean.src = BlackBean;
    menuListLeft.appendChild(soupBlackBean);

    const soupTomatoRice = generateElement('img', 'soup-tomato-rice', 'soup-image');
    soupTomatoRice.src = TomatoRice;
    menuListLeft.appendChild(soupTomatoRice);


    
    const menuListContent = generateElement('div', null, 'menu-list-content');
    menuListContainer.appendChild(menuListContent);

    menuListContent.innerHTML = `Hot Soup 
    <br> <br>
    Med 16OZ. $2.99 
    <br> <br>
    LARGE 32OZ. 3.99 
    <br> <br>
    Mulligatawny <br>
    Crab Bisque <br>
    Turkey Chili <br>
    Jambalaya  <br>
    Black Bean  <br>
    Chicken Broccoli <br> 
    Clam Bisque  <br>
    Split Pea  <br>
    French Onion  <br>
    Mushroom Barley  <br>
    Tomato Rice  <br>
    <br> 
    ALL SELECTIONS MADE 
    <br>
    FRESH DAILY 
    <br>  <br>
     
    
    NO SUBSTITUTIONS OR  
    <br>
    PHONE ORDERS`;



    const menuListRight = generateElement('div', 'menu-list-right', 'menu-list-right');
    menuListContainer.appendChild(menuListRight);

    const soupJambalaya = generateElement('img', 'soup-jambalaya', 'soup-image');
    soupJambalaya.src = Jambalaya;
    menuListRight.appendChild(soupJambalaya);

    const soupFrenchOnion = generateElement('img', 'soup-french-onion', 'soup-image');
    soupFrenchOnion.src = FrenchOnion;
    menuListRight.appendChild(soupFrenchOnion);

    const soupClamBisque = generateElement('img', 'soup-clam-bisque', 'soup-image');
    soupClamBisque.src = ClamBisque;
    menuListRight.appendChild(soupClamBisque);


    menuContainer.appendChild(menuContent);



    return menuContainer;
}

export default menu;
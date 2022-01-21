
const generateElement = (type, id , className) => {

    let element;

    if (!type || type === null) {
        console.log(` Error: generateElement could not parse element: ${element}`);
        return;
    }

    element = document.createElement(type);

    if(id) {
        element.id = id;
    }
    if(className){
        element.classList.add(className)
    }

    return element;

}

export default generateElement;
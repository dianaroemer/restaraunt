
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

// const generateElement2 = (obj) => {

//     let element;

//     obj[0];

//     if(obj.type !== string) {
//         console.log("ERROR: generateElement's type is not a string! " + obj.type );
//         return ""
//     }


// }

// let blerp = generateElement2({type:'div', id: 'sample', })

export default generateElement;
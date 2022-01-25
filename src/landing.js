
// Reference module code for creating and exporting a function with a return value for use in another script
// const myName = (name) => {
//     console.log("sup");
//     return 'Hi! My name is ' + name + "!";
// }
// export default myName;

// import Logo from './assets/logo.jpg'
import LadleImage from './assets/ladle.png'
import generateElement from './utils/helpers';

import CustomerImage1 from './assets/customer1.png';
import CustomerImage2 from './assets/customer2.png';
import CustomerImage3 from './assets/customer3.png';



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
    welcome.innerHTML = 'Welcome to the Soup and Soup Accessories';
    boxContainer.appendChild(welcome);
    
    const tagline = document.createElement('h3');
    tagline.classList.add('tagline');
    tagline.innerHTML = `"We're super." - Founder, Yev "Flazi" Kassem <br> <br>`;
    boxContainer.appendChild(tagline);



    const reviewContainer0 = generateElement('div', null, 'generic-container');
    reviewContainer0.innerHTML = `Here are review of Soup and Soup Accessories`;
    boxContainer.appendChild(reviewContainer0);



    // First Customer Review --------------------------------

    const reviewContainer1 = generateElement('div', null, 'review-container');
    boxContainer.appendChild(reviewContainer1);

    const reviewContent1 = generateElement('div', 'review-content-1', 'review-content');
    reviewContent1.innerHTML = `"This guy makes the best soup in the city, Jerry, the best! You know what they call him? Soup Flazi."<br> 
   "All right, Bania, I'm not letting you cut in line." <br>
    "Why not?" <br>
    "Because if he catches us, we'll never be able to get soup again!"`
    // reviewContent1.innerHTML += ;
    reviewContainer1.appendChild(reviewContent1);

    const customerName1 = generateElement('div', 'customer-name-1', 'customer-name');
    customerName1.innerHTML = "- Bania, customer";
    reviewContent1.appendChild(customerName1);

    const customerImage1 = generateElement('img', 'customer-image-1', 'customer-image');
    customerImage1.src = CustomerImage1;
    reviewContainer1.appendChild(customerImage1);

    // Second Customer Review --------------------------------

    const reviewContainer2 = generateElement('div', null, 'review-container');
    boxContainer.appendChild(reviewContainer2);

    const customerImage2 = generateElement('img', 'customer-image-2', 'customer-image');
    customerImage2.src = CustomerImage2;
    reviewContainer2.appendChild(customerImage2);

    const reviewContent2 = generateElement('div', 'review-content-2', 'review-content');
    reviewContent2.innerHTML = `"Oh, man. Ohh! This is fantastic. How does he do it?" <br>
    "You know, I don't see how you can sit there eating that and not even offer me any?" <br>
    "I gave you a taste. What do you want?" <br>
    "Why can't we share?" <br>
    "I told you not to say anything. You can't go in there, brazenly flaunt the rules, and then think I'm gonna share with you!" <br>
    "Do you hear yourself?" <br>
    "I'm sorry. This is what comes from living under a Flazi regime." <br>
    "Well, I gotta go back there and try again..." `;
    reviewContainer2.appendChild(reviewContent2);

    const customerName2 = generateElement('div', 'customer-name-2', 'customer-name');
    customerName2.innerHTML = " - Jimmy and Jorge, customers";
    reviewContent2.appendChild(customerName2);

    // Third Customer Review --------------------------------

    const reviewContainer3 = generateElement('div', null, 'review-container');
    boxContainer.appendChild(reviewContainer3);

    const reviewContent3 = generateElement('div', 'review-content-3', 'review-content');
    reviewContent3.innerHTML = `"You are the only one who understands me." <br>
    "You suffer for your soup!" <br>    
    "Yes. That is right."<br>
    "You demand perfection from yourself, from your soup." <br>
    "How can I tolerate any less from my customer?"<br>`
    reviewContainer3.appendChild(reviewContent3);

    const customerName3 = generateElement('div', 'customer-name-3', 'customer-name');
    customerName3.innerHTML = "- Yev, owner";
    reviewContent3.appendChild(customerName3);

    const customerImage3 = generateElement('img', 'customer-image-3', 'customer-image');
    customerImage3.src = CustomerImage3;
    reviewContainer3.appendChild(customerImage3);

    


    return landingContainerElement;

}


export default landing;

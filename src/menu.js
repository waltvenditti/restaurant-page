import imgMI1 from './gourmet-chili-and-rice.jpeg';
import imgMI2 from './meatloaf.jpeg';
import imgMI3 from './all-you-can-eat-bacon.jpeg';
import imgMI4 from './breakfast.jpg';

function genMenu() {
    const body = document.querySelector('body');
    const header = document.createElement('h1');
    const entries = document.createElement('h2');
    const breakfast = document.createElement('h2');
    const contentDiv = document.createElement('div');
    
    header.textContent = 'MENU';
    entries.textContent = 'ENTRIES'
    breakfast.textContent = 'BREAKFAST';
    contentDiv.setAttribute('id', 'content');

    //menu items 

    //MI1: chili and rice
    const MI1 = document.createElement('div');
    const MI1Header = document.createElement('h3');
    const MI1img = document.createElement('img');
    const MI1text = document.createElement('p');
    const MI1price = document.createElement('p');

    MI1.classList.add('menu-item');
    MI1Header.textContent = 'Chili and Rice';
    MI1text.textContent = 'Our legendary chili and rice. Try it and see for yourself - the rumors are true.';
    MI1price.textContent = '$2.99';
    MI1img.src = imgMI1;
    MI1.appendChild(MI1Header);
    MI1.appendChild(MI1price);
    MI1.appendChild(MI1img);
    MI1.appendChild(MI1text);

    //MI2: meat loaf
    const MI2 = document.createElement('div');
    const MI2Header = document.createElement('h3');
    const MI2img = document.createElement('img');
    const MI2text = document.createElement('p');
    const MI2price = document.createElement('p');

    MI2.classList.add('menu-item');
    MI2Header.textContent = 'Meat Loaf';
    MI2text.textContent = 'Spiced meat and vegetables. Exact composition subject to change depending on market prices, seasonal animal behavior, traffic density on nearby highways, and availability of wild plant matter.';
    MI2price.textContent = '$4.99';
    MI2img.src = imgMI2;
    MI2.appendChild(MI2Header);
    MI2.appendChild(MI2price);
    MI2.appendChild(MI2img);
    MI2.appendChild(MI2text);

    //MI3: AYCE bacon
    const MI3 = document.createElement('div');
    const MI3Header = document.createElement('h3');
    const MI3img = document.createElement('img');
    const MI3text = document.createElement('p');
    const MI3price = document.createElement('p');

    MI3.classList.add('menu-item');
    MI3Header.textContent = 'All-You-Can-Eat Bacon';
    MI3text.textContent = 'All you can eat bacon. Go ahead, get it with our specialty breakfast! Or don\'t!';
    MI3price.textContent = '$6.99';
    MI3img.src = imgMI3;
    MI3.appendChild(MI3Header);
    MI3.appendChild(MI3price);
    MI3.appendChild(MI3img);
    MI3.appendChild(MI3text);

    //MI4: breakfast
    const MI4 = document.createElement('div');
    const MI4Header = document.createElement('h3');
    const MI4img = document.createElement('img');
    const MI4text = document.createElement('p');
    const MI4price = document.createElement('p');

    MI4.classList.add('menu-item');
    MI4Header.textContent = 'The American Breakfast';
    MI4text.textContent = 'Please note that the SPECIFIC CONTENT OF THE FAMOUS BREAKFAST IS SUBJECT TO CHANGE DEPENDING ON CHEF CHOICE AND BOTH MARKET AND LOCAL AVAILABILITY. Guaranteed to include some combination of eggs, meat, and tubers. Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, a few mammals, and fish, and many of these have been consumed safely by humans for thousands of years.';
    MI4price.textContent = '$4.99';
    MI4img.src = imgMI4;
    MI4.appendChild(MI4Header);
    MI4.appendChild(MI4price);
    MI4.appendChild(MI4img);
    MI4.appendChild(MI4text);


    //html construction
    body.appendChild(contentDiv);
    contentDiv.appendChild(header);

    contentDiv.appendChild(breakfast);
    contentDiv.appendChild(MI4);
    contentDiv.appendChild(MI3);

    contentDiv.appendChild(entries);
    contentDiv.appendChild(MI1);
    contentDiv.appendChild(MI2);
    


}

export default genMenu;
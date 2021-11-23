import imgMI1 from './gourmet-chili-and-rice.jpeg';
import imgMI2 from './meatloaf.jpeg';
import imgMI3 from './all-you-can-eat-bacon.jpeg';
import imgMI4 from './breakfast.jpg';
import imgMI5 from './cthulhus-mac-and-dog.jpeg';
import imgMI6 from './turtle-pork.jpeg';
import imgMI7 from './chocolate-cake.jpeg';
import imgMI8 from './dino-cake-small.jpg';

function genMenu() {
    const body = document.querySelector('body');
    const header = document.createElement('h1');
    const entries = document.createElement('h2');
    const breakfast = document.createElement('h2');
    const desserts = document.createElement('h2');
    const drinks = document.createElement('h2');
    const contentDiv = document.createElement('div');
    
    header.textContent = 'MENU';
    entries.textContent = 'ENTRIES'
    breakfast.textContent = 'BREAKFAST';
    desserts.textContent = 'DESSERTS';
    drinks.textContent = 'DRINKS';
    contentDiv.setAttribute('id', 'content');
    breakfast.setAttribute('id', 'menu-top');


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
    MI2text.textContent = 'Spiced meat and vegetables. Exact composition subject to change depending on market prices, seasonal animal behavior, and traffic density on nearby highways.';
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
    MI3text.textContent = 'All you can eat bacon. Pairs well with out specialty breakfast.';
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
    MI4text.textContent = 'Please note that the specific content of The American Breakfast is subject to change depending on chef choice and both market and local availability. This meal is guaranteed to include some combination of eggs, meat, and starchy tubers. Eggs are laid by female animals of many different species, including birds, reptiles, amphibians, a few mammals, and fish, and many of these have been consumed safely by humans for thousands of years.';
    MI4price.textContent = '$4.99';
    MI4img.src = imgMI4;
    MI4.appendChild(MI4Header);
    MI4.appendChild(MI4price);
    MI4.appendChild(MI4img);
    MI4.appendChild(MI4text);

    //MI5: Cthulhu mac and cheese with hotdog
    const MI5 = document.createElement('div');
    const MI5Header = document.createElement('h3');
    const MI5img = document.createElement('img');
    const MI5text = document.createElement('p');
    const MI5price = document.createElement('p');

    MI5.classList.add('menu-item');
    MI5Header.textContent = 'Mac Cthulhu-roni and Cheese with Hot Dog';
    MI5text.textContent = 'Iä! Iä! Cthulhu fhtagn! Ph\'nglui mglw\'nafh Cthulhu R\'lyeh wgah\'nagl fhtagn.'
    MI5price.textContent = '$3.49';
    MI5img.src = imgMI5;
    MI5.appendChild(MI5Header);
    MI5.appendChild(MI5price);
    MI5.appendChild(MI5img);
    MI5.appendChild(MI5text);

    //MI6: turtle pork chop
    const MI6 = document.createElement('div');
    const MI6Header = document.createElement('h3');
    const MI6img = document.createElement('img');
    const MI6text = document.createElement('p');
    const MI6price = document.createElement('p');

    MI6.classList.add('menu-item');
    MI6Header.textContent = 'Porkchop Turtle with Vegetables';
    MI6text.textContent = 'This artisanal take on the pork chop is courtesy of former chef Rick "The Snake" Everson, who attended but did not complete a course in gourmet cooking at the famous Aunt Gene\'s Cooking School in Pine Bluff, Arkansas. We patiently await the return of Rick "The Snake" Everson and the other culinary innovations he will bring, who is due to be released on bail possibly as early as next year. Since Rick has been employed as a cook in his current circumstances, we expect him to introduce even more exciting dishes following his return.'
    MI6price.textContent = '$7.99';
    MI6img.src = imgMI6;
    MI6.appendChild(MI6Header);
    MI6.appendChild(MI6price);
    MI6.appendChild(MI6img);
    MI6.appendChild(MI6text);

    //MI7: chocolate dessert
    const MI7 = document.createElement('div');
    const MI7Header = document.createElement('h3');
    const MI7img = document.createElement('img');
    const MI7text = document.createElement('p');
    const MI7price = document.createElement('p');

    MI7.classList.add('menu-item');
    MI7Header.textContent = 'Crazy Horse Chocolate Cake';
    MI7text.textContent = 'Try this exciting, artistic take on traditional chocolate cake.'
    MI7price.textContent = '$9.99';
    MI7img.src = imgMI7;
    MI7.appendChild(MI7Header);
    MI7.appendChild(MI7price);
    MI7.appendChild(MI7img);
    MI7.appendChild(MI7text);

    //MI8: dino cake
    const MI8 = document.createElement('div');
    const MI8Header = document.createElement('h3');
    const MI8img = document.createElement('img');
    const MI8text = document.createElement('p');
    const MI8price = document.createElement('p');

    MI8.classList.add('menu-item');
    MI8Header.textContent = 'Dino Cake';
    MI8text.textContent = 'This cake was introduced following a project by Eugene, the five-year old son of restaurant owner Cleetus Orville. Bill loved the design so much that the dino cake has become a staple of the dessert menu. The dino cake, despite its green color, is in fact a delicious vanilla cake that serves as a fantastic finish to any entry on the menu.'
    MI8price.textContent = '$11.99';
    MI8img.src = imgMI8;
    MI8.appendChild(MI8Header);
    MI8.appendChild(MI8price);
    MI8.appendChild(MI8img);
    MI8.appendChild(MI8text);

    //MI9: drink disclaimer
    const MI9 = document.createElement('div');
    const MI9Header = document.createElement('h3');
    const MI9text = document.createElement('p');

    MI9.classList.add('menu-item');
    MI9Header.textContent = 'Legal Disclaimer on Drinks';
    MI9text.textContent = 'Following the decision made in USA Country Diner v. Department of Health and Human Services, USA Country Diner is not legally permitted to serve drinks in any capacity, nor to permit patrons to bring any consumable liquids into the restaurant. It is recommended that diners keep their preferred drink(s) on the provided table outside of the restaurant, where they may go as needed to refresh.'
    MI9.appendChild(MI9Header);
    MI9.appendChild(MI9text);


    //html construction
    body.appendChild(contentDiv);
    contentDiv.appendChild(header);

    contentDiv.appendChild(breakfast);
    contentDiv.appendChild(MI4);
    contentDiv.appendChild(MI3);

    contentDiv.appendChild(entries);
    contentDiv.appendChild(MI1);
    contentDiv.appendChild(MI2);
    contentDiv.appendChild(MI5);
    contentDiv.appendChild(MI6);

    contentDiv.appendChild(desserts);
    contentDiv.appendChild(MI7);
    contentDiv.appendChild(MI8);

    contentDiv.appendChild(drinks);
    contentDiv.appendChild(MI9);

}

export default genMenu;
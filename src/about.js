import ownerImg from './cleetus.jpg';

function genAbout() {
    const header = document.createElement('h1');
    const about = document.createElement('p');
    const contact1 = document.createElement('p');
    const contact2 = document.createElement('p');
    const contact3 = document.createElement('p');
    const contentDiv = document.createElement('div');
    const subDiv1 = document.createElement('div');
    const subDiv2 = document.createElement('div');
    const body = document.querySelector('body');
    const img = document.createElement('img');

    header.textContent = 'ABOUT';
    about.textContent = 'USA Country Diner was opened some time in the 1970s by Cleetus Orville, who hoped to commercialize his passion for cooking and hospitality by serving great food to regulars and new-comers alike. Situated near the junction of highways AR-530 and AR-114, the USA Country Diner is perfect choice for the hungry traveler passing through southern Arkansas. Many of the food items served here are collected by Cleetus himself from the Ouachita National Forest, making USA Country Diner an authentic outpost of rural Arkansas cuisine. ';
    contact1.textContent = 'Address: Highway AR-114, Mile 85-86, Arkansas';
    contact2.textContent = 'Phone Number: n/a';
    contact3.textContent = 'Hours: ??? - ???, Sun - Sat'

    contentDiv.setAttribute('id', 'content');
    about.classList.add('about');
    contact1.classList.add('about2');
    contact2.classList.add('about2');
    contact3.classList.add('about2');
    subDiv1.classList.add('sub-div');
    subDiv2.classList.add('text-div');
    img.src = ownerImg;
    img.classList.add('about-img');

    body.appendChild(contentDiv);
    contentDiv.appendChild(header);
    contentDiv.appendChild(subDiv1);
    subDiv1.appendChild(subDiv2);
    subDiv1.appendChild(img);
    subDiv2.appendChild(about);
    subDiv2.appendChild(contact1);
    subDiv2.appendChild(contact2);
    subDiv2.appendChild(contact3);

}

export default genAbout;


// address is HIGHWAY 602 or something
//unincorporated territories 
//Hours: ??? - ??? 
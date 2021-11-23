import MainImg from './restaurant-exterior-1.jpeg';

function genMainPage() {
    const header = document.createElement('h1');
    const img = document.createElement('img');
    const copy = document.createElement('p');
    const contentDiv = document.createElement('div');
    const body = document.querySelector('body');

    header.textContent = 'USA COUNTRY DINER';
    img.src = MainImg;
    img.style['height'] = '400px';
    copy.textContent = "Try the most legendary food in the AR-114/AR-530 Junction area.";
    contentDiv.setAttribute('id', 'content');
    copy.setAttribute('id', 'main-subtext')
    header.setAttribute('id', 'menu-header')

    body.appendChild(contentDiv);
    contentDiv.appendChild(header);
    contentDiv.appendChild(copy);
    contentDiv.appendChild(img);
}

export default genMainPage;
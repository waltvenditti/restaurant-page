import MainImg from './main-image.jpg';

console.log('Test successful.');

const header = document.createElement('h1');
const img = document.createElement('img');
const copy = document.createElement('p');
const contentDiv = document.createElement('div');
const body = document.querySelector('body');

header.textContent = 'RESTAURANT';
img.src = MainImg;
img.style['height'] = '400px';
copy.textContent = "Try the most legendary food in town.";
contentDiv.setAttribute('id', 'content');

body.appendChild(contentDiv);
contentDiv.appendChild(header);
contentDiv.appendChild(img);
contentDiv.appendChild(copy);

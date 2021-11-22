import genAbout from './about';
import genMainPage from './main-page';
import genMenu from './menu';
import './style.css';

//create header and buttons
const header = document.createElement('header');
const body = document.querySelector('body');
const BtnMain = document.createElement('button');
const BtnMenu = document.createElement('button');
const BtnAbout = document.createElement('button');

BtnMain.textContent = 'Main Page';
BtnMenu.textContent = 'Menu';
BtnAbout.textContent = 'About';
header.classList.add('header');

body.appendChild(header);
header.appendChild(BtnAbout);
header.appendChild(BtnMenu);
header.appendChild(BtnMain);

BtnMain.addEventListener('click', () => {
    clearPage();
    genMainPage();
});
BtnMenu.addEventListener('click', () => {
    clearPage();
    genMenu();
});
BtnAbout.addEventListener('click', () => {
    clearPage();
    genAbout();
})

//gen mainpage on startup
genMainPage();

//helper functions 
function clearPage() {
    let content = document.querySelector('#content');
    body.removeChild(content);
}

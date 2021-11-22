function genAbout() {
    const header = document.createElement('h1');
    const copy = document.createElement('p');
    const contentDiv = document.createElement('div');
    const body = document.querySelector('body');

    header.textContent = 'ABOUT';
    copy.textContent = 'We are LEGENDARY.'
    contentDiv.setAttribute('id', 'content');

    body.appendChild(contentDiv);
    contentDiv.appendChild(header);
    contentDiv.appendChild(copy);
}

export default genAbout;


// address is HIGHWAY 602 or something
//unincorporated territories 
//Hours: ??? - ??? 
import grouple from './assets/grouple.png'

function addImage(){
    const img = document.createElement('img')
    img.alt = 'grouple';
    img.width = 300;
    img.src = grouple;
    const body = document.querySelector('body')
    body.appendChild(img)
}

export default addImage
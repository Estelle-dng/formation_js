'use strict';

// # 4_DOM

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];
const exo1 = document.getElementById('exo1');

colors.forEach( couleur => {

    const element = document.createElement("div");
    exo1.appendChild(element).textContent = couleur;
    element.style.backgroundColor = couleur;
    element.addEventListener('click', () =>{
        console.log(couleur);
    });

});


// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/


const exo2 = document.createElement("section");

exo2.classList.add('exo2');
document.body.appendChild(exo2);
const element = document.createElement("div");
element.style.backgroundColor = 'black';
element.style.height = '100px';
element.style.width = '100px';
exo2.appendChild(element);

exo2.addEventListener('click', (e) =>{
    element.style.height = e.clientX + 'px';
    element.style.width =  e.clientY + 'px';
});

// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

const exo3 = document.createElement("section");
const myDiv = document.createElement('div');
exo3.classList.add('exo3');
document.body.appendChild(exo3);
exo3.appendChild(myDiv).textContent = names[0];
exo3.firstChild.addEventListener('click', () => {
    const arrayLength = names.length;
    let myNumber = Math.floor(Math.random() * arrayLength);
    myDiv.remove();
    exo3.appendChild(myDiv).textContent = names[myNumber];
});


// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/


const exo4 = document.createElement('section');
exo4.setAttribute('id', 'exo4');
document.body.appendChild(exo4);
const button = document.createElement('button');
button.textContent = 'track';
exo4.appendChild(button);
const myDiv2 = document.createElement('div');
exo4.appendChild(myDiv2);

const mafonctionasmere = (e) => {
    myDiv2.textContent =  'Coord Y : ' + e.clientY + ' Coord X : ' + e.clientX;
}

document.addEventListener('mousemove', mafonctionasmere)
let isTracked = true;
button.addEventListener('click', (e) => {
    if (isTracked) {
        document.removeEventListener('mousemove', mafonctionasmere);
        isTracked = false;
    } else {
        document.addEventListener('mousemove', mafonctionasmere)
        isTracked = true;
    }
});

// -------------------------------

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/

const exo5 = document.createElement('section');
exo5.setAttribute('id', 'exo5');
document.body.appendChild(exo5);

const dragDiv = document.createElement('div');
dragDiv.textContent = 'drag me';
exo5.appendChild(dragDiv);

const trackMouse = (e) => {
    dragDiv.style.left = e.clientX + 'px';
    dragDiv.style.top = e.clientY + 'px';
}

dragDiv.addEventListener('mousedown', (e) => {
    dragDiv.style.position = "absolute";
    document.addEventListener('mousemove', trackMouse);

});

dragDiv.addEventListener('mouseup', (e) => {
    document.removeEventListener('mousemove', trackMouse);
});

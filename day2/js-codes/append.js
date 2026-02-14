const mainbox = document.getElementById('main-container');

const creatSection =document.createElement('section');

const creath1 = document.createElement('h1');
creath1.innerText='this is yousuf rahman'
const creatUl = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText='list 1';
const li2 = document.createElement('li')
li2.innerText='list 2';
const li3 = document.createElement('li')
li3.innerText='list 3';

mainbox.appendChild(creatSection);
creatSection.appendChild(creath1);
creatSection.appendChild(creatUl);
creatUl.appendChild(li1);
creatUl.appendChild(li2);
creatUl.appendChild(li3);





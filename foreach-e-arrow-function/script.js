/*
const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

----------------------------------------------------------------------

const titulos = document.getElementsByClassName('titulo');
console.log(titulos);


const titulosArray = Array.from(titulos);
console.log(titulosArray);

titulosArray.forEach(function (item, index, array) {
  console.log(item, index, array);
});

---------------------------------------------------------------------

Arrow Function
Encurta a function expression, remove a palavra "function" e adiciona a setinha =>


const imgs = document.querySelectorAll('img');

imgs.forEach((item, index, array) => {
  console.log(item, index);
});

Se tiver apenas um argumento nao precisa de parenteses
imgs.forEach(item => {
  console.log(item);
});

*/

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p'); //ou get element by tag name
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

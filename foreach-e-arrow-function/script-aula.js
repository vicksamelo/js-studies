// const imgs = document.querySelectorAll('img');

// //index eh a posicao do item na array
// imgs.forEach(function(item, index, array){
//     //console.log(item, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function (item, index, array) {
  // console.log(item, index, array);
});

const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach((item) => {
//     console.log(i++)
// });

let i = 0;
imgs.forEach((item) => {
  console.log(i++);
});

//================================Exercicios=======================

// Mostre no console cada parágrado do site
const paragraph = document.querySelectorAll('p');
console.log(paragraph);

paragraph.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
// const paragraphArray = Array.from(paragraph);
// paragraphArray.forEach((item) => console.log(item));

paragraph.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgss = document.querySelectorAll('img');

imgss.forEach((item, index) => {
  console.log(item, index);
});

let x = 0;
imgss.forEach(() => {
  console.log(x++);
});

imgss.forEach(() => x++);
console.log(x);

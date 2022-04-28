// //OUTERHTML, INNERHTML E INNERTEXT

// const menu = document.querySelector('.menu');

// menu.outerHTML; // Retorna todo o html do elemento, a tag inteira
// menu.innerHTML; // Retorna o texto, COM formatações e COM elementos html
// menu.innerText; // Retorna somente o texto, sem formatações ou elementos html

// const h1 = document.querySelector('h1');

// //TRASVERSING

// const lista = document.querySelector('.animais-lista');

// lista.parentElement; // pai
// console.log(lista.parentElement);

// lista.parentElement.parentElement; // pai do pai
// console.log(lista.parentElement.parentElement);

// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro item da lista
// lista.children[--lista.children.length]; // último item da lista

// lista.querySelectorAll('li'); // todas as LI's
// lista.querySelector('li:last-child'); // último item da lista

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));

// console.log(lista.previousSibling);

// //---------------------------------------------------MANIPULANDO ELEMENTOS----------------------------------------- É possível mover elementos no DOM com métodos de Node

// const lista = document.querySelector('.animais-lista');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');

// //destino final.comando a ser executado(elemento a ser movido) ========== ESTRUTURA
// // contato.appendChild(lista); //move a lista para o final de contato

// contato.insertBefore(lista, titulo);

// contato.removeChild(mapa);

// contato.replaceChild(mapa, titulo);

// //---------------------------------NOVOS ELEMENTOS---------------------------------------------
// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Titulo';
// novoH1.classList.add('titulo');

// animais.appendChild(novoH1);

// //--------------------------------CLONAR ELEMENTOS--------------------------------------------

// const titulo = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo;

// const cloneTitulo = titulo.cloneNode(true); // true sinaliza para incluir os filhos
// const contato = document.querySelector('.contato');
// contato.appendChild(cloneTitulo);

// const h1 = document.querySelector('h1');
// const faq = document.querySelector('.faq');
// const novoH1 = h1.cloneNode(true);

// faq.appendChild(novoH1);

//----------------------------------------------EXERCICIOS------------------------------------------------------

// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const novoMenu = menu.cloneNode(true);

copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq

const dl = document.querySelector('dl');
const firstDt = dl.children[0];
console.log(firstDt);

// Selecione o DD referente ao primeiro DT
const dd = firstDt.nextElementSibling;
console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;

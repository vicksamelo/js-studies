/*
 
addEventListener - Adiciona uma funcao (chamada de callback), que sera ativada quando certo evento ocorrer
const img = document.querySelector('img');

elemento.addEventListener(event, callback, options);
img.addEventListener('click', function () {
  console.log('Clicou');
});

 */

const img = document.querySelector('img');

function callback(e) {
  console.log(e);
}

// img.addEventListener('click', callback);

// Propriedades do Event

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; //this
  const target = event.target; // onde o click ocorreu
  const type = event.type; // tipo do evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

// animaisLista.addEventListener('click', executarCallback);

// event.preventDefault()
// Previne o comportamento padrão do evento no browser. No caso de um link externo, irá previnir que ele seja ativado

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
  console.log(this);
  console.log(event.currentTarget);
}

linkExterno.addEventListener('click', handleLinkExterno);

/* ********************Diferentes Eventos***********************

Existem diversos eventos como CLICK, SCROLL, RESIZE, KEYDOWN, KEYUP, MOUSEENTER, etc.
Eventos podem ser adicionados a diferentes elementos como o window e document.



const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback); //passa o mouse por cima
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback); //redimensiona o browser
window.addEventListener('keydown', callback); //pressiona a tecla
window.addEventListener('keyup', callback); //solta a tecla

*/

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

// descomentar uma linha abaixo para executar a funcao

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);
// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keyup', handleEvent);
// window.addEventListener('keydown', handleEvent);

/* ********************Keyboard***********************   

Voce pode adcionar atalhos para facilitar a navegacao do site atraves de eventos do keyboard

*/

// Funcao para fazer tela cheia
function openFullscreen(event) {
  if (event.key === 'f') {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    document.documentElement.requestFullscreen();
  }
}
window.addEventListener('keydown', openFullscreen);

//Estrutura basica de evento com funcao

const ativar = document.querySelector('h1');

function random() {
  alert('Deu certo!');
}

ativar.addEventListener('click', random);

//Outro exemplo

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma.
//Previna o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]'); // Pega todos os links

function ativo(event) {
  event.preventDefault(); //Previne o comportamento padrao

  links.forEach((link) => {
    //para cada link
    link.classList.remove('ativo'); //remove a classe ativo
  });
  event.currentTarget.classList.toggle('ativo'); //adiciona a classe ativo apenas no link selecionado
  console.log(event);
}

links.forEach((link) => {
  link.addEventListener('click', ativo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const selectedAll = document.querySelectorAll('body *');

selectedAll.forEach((element) => {
  element.addEventListener('click', clicouAqui);
});

function clicouAqui(event) {
  console.log(event.currentTarget);
}

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function clicouAqui(event) {
//   event.currentTarget.remove();
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function openFullscreen(event) {
  if (event.key === 'f') {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    document.documentElement.requestFullscreen();
  }
}
window.addEventListener('keydown', openFullscreen);

function aumentarTexto(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('texto-maior');
  }
}

window.addEventListener('keydown', aumentarTexto);

/*
    section.clientHeight // height + padding
    section.offsetHeight // height + padding + border
    section.scrollHeight // height total, mesmo dentro de scroll

const listaAnimais = document.querySelector('.copy');
const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
console.log(primeiroh2);
const h2left = primeiroh2.offsetLeft;
console.log(h2left);

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
);

// matchMedia()  - Utilize um media-querie como no CSS para verificar a largura do browser;

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
  console.log('Usuario mobile');
} else {
  console.log('Usuario desktop');
}


*/

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll('img');
  let soma = 0;

  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
console.log(links);

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeigt = link.offsetHeight;
  if (linkWidth >= 48 && linkHeigt >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Nao possui boa acessibilidade ');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu');

  menu.classList.add('menu-mobile');
  console.log('dsaa');
} else {
  console.log('dshaiiudsaiudsahu');
}

const menu = document.querySelector('.menu');

// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo');

//console.log(menu.classList.add);

menu.classList.add('ativo', 'teste');
menu.classList.toggle('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className = menu.className + ' vermelho';

// console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto'].value);

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Eh uma raposa'); // muda o alt
img.hasAttribute('id'); //  true/false
img.removeAttribute('alt'); //  remove o alt

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);
console.log(img.getAttribute('alt'));

const animals = document.querySelector('.animais');

animals.className; //string com o nome das classes
animals.className = 'azul'; // substitui completamente a string
animals.className += 'vermelho'; // adiciona vermelho a string

animals.attributes = 'class="ativo"';

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km} km`);
  },
};

//============================Exercicios==========================

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

//menu.className += ' ativo';

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.removeAttribute('ativo');

// Verifique se as imagens possuem o atributo alt

// Modifique o href do link externo no menu

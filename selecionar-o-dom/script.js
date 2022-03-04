const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1])

const firstLi = document.querySelector('li');
console.log(firstLi);

const firstUl = document.querySelector('ul');
console.log(firstUl);

const internalLinks = document.querySelector('[href^="#]');
console.log(internalLinks);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

firstUl.classList.add('grid-section');

// console.log(gridSectionHTML[0]);
// console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item, index){
console.log(index);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
    console.log(item);
});


//----------------------------Exercicios----------------------------------



// Retorne no console todas as imagens do site

const images = document.querySelectorAll('img');
console.log(images);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const selectedImages = document.querySelectorAll('img[src^="img/imagem"]');
console.log(selectedImages);


// Selecione todos os links internos (onde o href começa com #)
const selectedLinks = document.querySelectorAll('[href^="#]');
console.log(selectedLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animals = document.querySelector('.animais-descricao h2');
console.log(h2Animals);


// Selecione o último p do site
const lastP = document.querySelectorAll('p');
// console.log(lastP[lastP.length - 1]);
console.log(lastP[--lastP.length]);


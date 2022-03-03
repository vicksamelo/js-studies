const h1Selected = document.querySelector('h1');
const h1Classes = h1Selected.classList;


function callBackh1(){
    console.log('Clicou em ', h1Selected.innerText);
}


h1Selected.addEventListener('click', callBackh1);


//---------------------------Exercicios----------------------------------



// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);


// Seleciona o primeiro elemento da página que
// possua a classe ativo
const activeElement = document.querySelector('.ativo');


// Retorne a linguagem do navegador
const lang = window.navigator.language;
console.log(lang);


// Retorne a largura da janela 
const windowWidth = window.innerWidth;
console.log(windowWidth);
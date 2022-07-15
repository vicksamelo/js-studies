const perimetro = new Function('lado', 'return lado * 4');


// Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função
function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'

//function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.
const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018

const frutas = ['Banana', 'Pêra', 'Uva'];

Array.prototype.mostrarThis = function () {
  console.log(this);
}

frutas.mostrarThis();

//O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.
//passa em cada item da array sem precisar transformar em argumento
//recebe uma ASRRAY

const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar


//Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesma com o novo contexto de this.

const li = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(li, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();


//---------------EXERCICIOS-------------

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador ,item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento (tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElemento('li', 'azul', 'Essa  li é azul'));



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

console.log(h1Titulo('Cursos de React JS'))
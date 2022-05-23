const comida = 'Pizza';
const agua = 'Agua agua ';
const water = new String('Agua ');

console.log(agua.length);

const frase = 'A melhor comida';

comida.length; // 5
frase.length; // 15

comida[0]; // P
frase[0]; // A
frase[frase.length - 1]; // a

//Retorna o caracter de acordo com o index de (n).
const linguagem = 'JavaScript';

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

//Concatena as strings e retorna o resultado.
const frase2 = 'A melhor linguagem é ';
const linguagem2 = 'JavaScript';

const fraseCompleta = frase2.concat(linguagem2, '!!', 'Helloooo hehehhe');

console.log(fraseCompleta);

//Procura pela string exata dentro de outra string. A procura é case sensitive.
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false
fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false

//Corta a string de acordo com os valores de start e end.---SLICE----
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente  --> numero negativo pega somente os (x) ultimos caracteres;
transacao1.slice(3, 6); // ósi

//Corta a string de acordo com os valores de start e end. Não funciona com
//valores negativos como o slice.
const linguagem11 = 'JavaScript';
linguagem11.substring(3, 5); // aS
linguagem11.substring(0, 4); // Java
linguagem11.substring(4); // Script
linguagem11.substring(-3); // JavaScript

//Retorna o index da string, assim que achar o primeiro resultado
// ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

//Aumenta o tamanho da string para o valor de n. Ou seja, uma string
// com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres.
// O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
});

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.'); // R$ 99.....

//Repete a string (n) vezes.

const musica = 'Ta';
musica.repeat(5); // TaTaTaTaTa

//Aumenta o tamanho da string para o valor de n. Ou seja, uma string
//com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres.
//O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const listaPrecos2 = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos2.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
});

listaPrecos2[0].padStart(10, '.'); // .....R$ 99
listaPrecos2[0].padEnd(10, '.'); // R$ 99.....

// Divide a string de acordo com o padrão passado e retorna uma array.

const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

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

//Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto.
//Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace('Camisas', 'Shirts');

listaItens = listaItens.replace(/[ ]+/g, ', '); //+/g -> essa expressao faz buscar todos os
//caracteres globalmente
console.log(listaItens);

// Divide a string de acordo com o padrão passado e retorna uma array.
const arrayLista = listaItens.split('s, '); //remove "s," e quebra no espaco
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

console.log(htmlText);
console.log(htmlArray);
console.log(htmlNovo);

//Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino'); //transforma em lowercase p
//n dar erro de verificacao

//Remove espaço em branco do início ou final de uma string.
const valor = '  R$ 23.00   ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

//-------------------------------------------EXERCICIOS---------------------------------------

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  //isso aqui eh uma array com varios objetos
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += +numeroLimpo; //(o + na frente de uma string transforma ele em numero)
  } else {
    recebimentoTotal += +numeroLimpo;
  }
});

console.log(taxaTotal);
console.log(recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');
console.log(html);

// Retorne o último caracter da frase
const sentence = 'Melhor do ano!';
console.log(sentence[sentence.length - 1]);

// Retorne o total de taxas
const transacoes2 = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

let totalTaxas2 = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase().trim().slice(0, 4);
  if (item === 'taxa') {
    totalTaxas2++;
  }
});
console.log(totalTaxas2);

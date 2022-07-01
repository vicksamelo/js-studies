//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. 
//Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach(function(item, index, array){
    console.log(item.toUpperCase())
})

carros.forEach((item) => {
    console.log(item.toLowerCase);
})

const li = document.querySelectorAll('li');

//const retornoForEach = li.forEach((item) => {
//    item.classList.add('ativa')
//});

const retornoMap = carros.map((item) => {
  item.toLocaleUpperCase()
});

//console.log(retornoForEach);
console.log(retornoMap);

const numbers = [2,4,5,6,78];
const doubleNumbers = numbers.map(n => n * 2);

console.log(doubleNumbers);

//[].MAP()
//[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(),
//porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

//[].MAP() COM OBJETOS
//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
  
const tempoAulas = aulas.map(aula => aula.min);

const nomeAula = aula => aula.nome;

const arrayNomeAula = aulas.map(nomeAula);

console.log(arrayNomeAula);
console.log(tempoAulas);

//[].REDUCE()
//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulas2 = [10, 25, 30];

const reduceAulas2 = aulas2.reduce((acumulador, item) => {
    return acumulador + item;
},0);

// const aulas3 = [10, 25, 30];

// // 1
// aulas3.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas3.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas3.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65




const numeros13 = [10,25,30,3,54,33,22];

const maiorNumero = numeros13.reduce((acumulador, atual) => {
    if (acumulador > atual){
        return acumulador;
    }
    else {
        return atual;
    }
    //ou return acumulador > atual ? anterior : atual;
});

console.log(maiorNumero);

const listaAulas = aulas.reduce((acumulador, aula, index) => {
    acumulador[index] = aula.nome;
    return acumulador;
}, {})
// 1
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//     {}[0] = 'HTML 1';
//     return {0: 'HTML 1'};
//   }, {})
  
//   // 2
//   aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//     {0: 'HTML 1'}[1] = 'HTML 2';
//     return {0: 'HTML 1', 1: 'HTML 2'};
//   }, {})
  
//   // 3
//   aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//     {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//     return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
//   }, {})
  
//   // 4
//   aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//     {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
//     return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
//   }, {})

  
//   Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutas99 = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas99.reduceRight((acc, fruta99) => acc + ' ' + fruta);
const frutasLeft = frutas99.reduce((acc, fruta99) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


//[].some(), se pelo menos um return da iteração for truthy, ele retorna true.
const frutas2 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros2 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true

//[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.
const frutas3 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas.every((fruta) => {
  return fruta; // false
});

const numeros3 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(x => x > 3); // true

//[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const frutas10 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas10.findIndex((fruta10) => {
  return fruta10 === 'Uva';
   
  
}); // 2


const numeros10 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros10.find(x => x > 45); // 88


//[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros = [6, 43, 22, 88, 101, 29];
const buscAMaior45 = numeros.filter(x => x > 45); // [88, 101]

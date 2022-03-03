
var nome = 15;

if (nome) {
    console.log(nome);
} else {
    console.log('Nome nao existe');
}

var possuiGraduacao = true;

if(!possuiGraduacao){
    console.log('Nao possui Graduacao');
} else {
    console.log('Possui graduacao');
}

let condicional = (15 - 5) && (5 + 5);

if (condicional){
    console.log('Verdadeiro', condicional);
} else {
    console.log('False', condicional);
}

let condicional2 = (5 -5) || (5 + 5) && (10 - 2);

console.log(condicional2);


var corFavorita = 'Roxo';

switch (corFavorita){
    case 'Azul':
        console.log('Olhe para o ceu');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
        case 'Vermelho':
            console.log('Olhe para as rosas');
            break;
    default:
        console.log('Feche os olhos');
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 30;
var outraIdade = 30;

if (minhaIdade > outraIdade){
    console.log('Eh maior');
} else if (minhaIdade == outraIdade){
    console.log('Eh igual');
} else {
    console.log('Eh menor.');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china){
    console.log('Brasil tem mais habitantes');
} else if (brasil < china){
    console.log('China tem mais habitantes');
} else if (brasil == china) {
    console.log('Numero de habitantes iguais');
}


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}


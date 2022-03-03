function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
    return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(pi());

function imc (peso, altura){
    var imc = peso / (altura * altura);
    return imc;
}
console.log(imc(64, 1.72));

function corFavorita (cor) {
    if(cor === 'azul') {
        return 'Eu gosto do ceu';
    } else if(cor === 'verde') {
        return 'Eu gosto da natureza';
    } else {
        return 'Eu nao gosto de nada';
    }
}

console.log(corFavorita('verde'));

addEventListener ('click', function() {
    console.log('oi');
})

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(70, 1.72);


function terceiraIdade(idade) {
    if(idade >= 60){
    console.log('Eh idoso');
    }
}

terceiraIdade(60);


function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} paises`;
}
console.log(faltaVisitar(20));


var profissao = 'Dev';

function dados() {
  var nome = 'Vicky';
  var idade = 24;
  function outrosDados() {
    var endereco = 'Floripa';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());

// =============Exercicios=================


// Crie uma função para verificar se um valor é Truthy

function verificaTrue(dado){
    return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado){
    return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto (nome, sobrenome){
    var nome = 'Victoria';
    var sobrenome = 'Melo';

    return `${nome} ${sobrenome}`;
}


// Crie uma função que verifica se um número é par

function evenNumber(number) {
    if (number % 2 == 0 ) {
        return true;
    } else {
        return false;
        }
}


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function dataType(data){
    
    return typeof data;
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    console.log('Victoria Melo');
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  var totalPaises = 193;
  precisoVisitar(20);
  jaVisitei(20);
  
var numero = 20;
var numero2 = 10;

numero += numero2 // numero = numero + 2
console.log(numero);
console.log(numero2);

var idade = 20;
var naoPossuiDiabetes = true ;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Vicky' : 'Melo';

console.log(podeBeber);



// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;

console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);

console.log(darCredito);

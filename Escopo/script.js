var carro = 'Fusca';

function mostrarCarro() {
    console.log(carro);
  }
  
  mostrarCarro(); // Fusca no console
  console.log(carro); // Erro, carro is not defined
  
  if(false){
      const mes = 'Dezembro';
      console.log(mes);
  }

  //console.log(mes);

  {
      var carro2 = 'Fusca2';
      //const ano = 2018;

  }

  console.log(carro2);
  //console.log(ano);

var i = 50;

//   for (let i = 0; i < 10; i++){
//       console.log(`Numero ${i}`);
//   }

  console.log(i * 10);

  const semana = 'Sexta';

  console.log(semana);  

  const data = {
      ano: 2018, 
      mes: 'Dezembro',
  }

  data.ano = 2019;
  data.dia = 25;



  //--------------------------------------Exercicios-----------------------



  // Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);
  }

  
  // Como corrigir o erro abaixo?
  let dois = 2;
  function somarDois(x) {
    return x + 2;
  }
  function dividirDois(x) {
    return x / 2;
  }
  somarDois(4);
  dividirDois(6);
  
  // O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  
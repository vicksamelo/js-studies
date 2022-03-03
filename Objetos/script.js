var pessoa = {
    nome:'Victoria',
    idade: 24,
}

console.log(pessoa);

var quadrado = {
    lados: 4, 
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.area.lados * lado;
    }, 
    cinco(){
        return 5;
    },
}

console.log(quadrado.area(5));

var menu = {
    width: 800, 
    height: 50, 
    backgroundColor: '#84E',
    metadeHeight(){
        return this.height / 2;
    }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function(){
    console.log('Escondi');
}
var bg = menu.backgroundColor;



// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var personalData = {
    Name: 'Vicky',
    LastName: 'Melo', 
    Age: 24, 
    Pets: 'Lola',
    Home: 'Goiania',
}

// Crie um método no objeto anterior, que mostre o seu nome completo

personalData.fullName = function(){
    return `${this.Name} ${this.LastName}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco = 3000;

  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var dog = {
      breed: 'labrador', 
      color: 'black', 
      age: 10, 
      bark(person){
        if (person == 'man'){
            return 'Barks';
        } else {
            return 'Doesnt bark';;
        }
      }
  }
  
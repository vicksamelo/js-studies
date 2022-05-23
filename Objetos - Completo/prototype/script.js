function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abraçou';
  };
}

//PROTOTYPE é um objeto adicionado a uma função quando ela é criada

//o prototype é exclusivo da funcao
//para adc metodo precisa chamar a funcao.prototype.metodo, segue exemplo

Pessoa.prototype.andar = function () {
  return this.nome + ' andou'; // aqui pode passar as propriedades do objeto principal criado acima
};

Pessoa.prototype.nadar = function () {
  return this.nome + ' nadou';
};

const victoria = new Pessoa('Victoria', 25);

const pais = 'Brasil';
const cidade = new String('Rio');

const animais = ['cachorro', 'gato', 'cavaloooooo'];

const lista = document.querySelectorAll('li');

const listaArray = Array.prototype.slice.call(lista);

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome} `;
};

const vicktoria = new Pessoa('Victória', 'Melo', 25);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLiElement
li.click; // function
li.innerText; //string
li.value; // number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string

const Pessoas = function (nome, sobrenome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.sobrenome = sobrenome;
};

Pessoas.prototype.fullName = function () {
  return `${this.nome} ${this.sobrenome}`;
};

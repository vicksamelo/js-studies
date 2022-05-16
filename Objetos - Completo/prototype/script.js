function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return 'Abraçou';
  };
}

//o prototype é exclusivo da funcao
//para adc metodo precisa chamar a funcao.prototype.metodo, segue exemplo

Pessoa.prototype.andar = function () {
  return this.nome + ' andou'; // aqui pode passar as propriedades do objeto principal criado acima
};

Pessoa.prototype.nadar = function () {
  return this.nome + ' nadou';
};

const victoria = new Pessoa('Victoria', 25);

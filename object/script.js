const pessoa =  new Object({
  nome: 'Victoria'
});

console.log(pessoa.nome);

const carro = {
  rodas: 4,
  marca: 'Nissan',
  acelerar(){
    return this.marca + ' acelerou';
  },
  buzinar(){
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro);

honda.marca = 'Honda';
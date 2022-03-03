var videoGames = ['Switch', 'PS4', 'XBOX', '3DS']


for (var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);
    if(videoGames[item] == 'PS4'){
        break;
    }
}

videoGames.forEach(function(){
    console.log('oi');
})

/*
var i = 0
while (i <= 100){
    console.log(i);
    i = i + 5;
}

*/

//-------------------------Exercicios---------------------

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var worldChamp = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let year = 0; year < worldChamp.length; year++){
    console.log(`O Brasil ganhou a copa de ${worldChamp[year]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let fruta = 0; fruta < frutas.length; fruta++){
    console.log(frutas[fruta])
    if (frutas[fruta] == 'Pera'){
        break;
    }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var lastFruit = frutas[frutas.length - 1];
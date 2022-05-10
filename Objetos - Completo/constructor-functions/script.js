function Carro() = {
    console.log(this)
}

const honda = new Carro();
honda.andar = function(){
   console.log('andou');
}
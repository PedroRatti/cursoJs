function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('fazendo ligação...')
        }
    }
}

const celular1 = criarCelular('Iphone',5.5,5000);
console.log(celular1);
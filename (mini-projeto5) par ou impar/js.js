//receber uma quantidade de valores para avaliar
//funçao exibe se cada valor e par ou impar

exibirTipo(5,20);
function exibirTipo(inicial,limite) {
    for (var i = inicial; i <= limite; i++){
        if ( i % 2 === 0)
            console.log(i,'par');
        else
            console.log(i,'impar');
    }
}
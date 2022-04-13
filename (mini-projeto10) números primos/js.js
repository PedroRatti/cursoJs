//criar função para mostrar os números primos

//primos
//compostos

//ex: 10, 11


//oq eu fiz
exibirNumerosPrimos(10);

function exibirNumerosPrimos(limite) {
    var ehComposto = false;
    var lista = [1,limite];
    for (i = 2; i < limite; i++ ) {
        if ( limite % 1 === 0 && limite % limite === 0 && limite % i === 0) {
            lista.push(i);
            console.log(i);
            ehComposto = true;
        }
    }
    if (ehComposto) {
        console.log('composto')
    }
    else {
        console.log('primo')
    }
    console.log(lista);
}

//exibirNumerosPrimos(20);

// function exibirNumerosPrimos(limite){
//     for (var numero  = 2; numero <= limite; numero++){

//         // for (var divisor = 2; divisor < numero; divisor++){
//         //     if (numero % divisor === 0) {
//         //         ehPrimo = false;
//         //         break;
//         //     }
//         // } esta função foi realocada para transformar ela em 2 funções diferentes para facilidades de manutenção e reutilização do codigo
//         if (numeroPrimo(numero)) console.log(numero);
//     }
// }

// function numeroPrimo(numero) {
//     var ehPrimo = true;

//     for (var divisor = 2; divisor < numero; divisor++){
//         if (numero % divisor === 0) {
//             return false;
//         }
//     }
//     return true;
// }
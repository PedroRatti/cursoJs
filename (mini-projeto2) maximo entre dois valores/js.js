//escreva uma função que usa 2 números e retorna o maior entre eles

var maiorNumero = max(9,9);
console.log(maiorNumero);

function max (numero1,numero2) {
    if (numero1 > numero2)
        return numero1;
    if (numero2 > numero1) 
        return numero2;
    else return {numero1,numero2};
}


//divisivel por 3 => fizz
//divisivel por 5 => buzz
//divisivel por 3 e 5 => fizzbuzz
//nao divisivel por 3 e 5 => mesmo numero de entrada
//nao e um numero => 'nao e um numero'

const resultado = fizzBuzz(4);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}
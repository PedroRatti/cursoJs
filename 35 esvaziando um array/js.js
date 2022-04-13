var numeros = [1,2,3,4,5,6];
var outros = numeros;
//solução 1
// numeros = [];

//se esse array for uma referencia para outra var a mar se manterá e o array sera apagado
// console.log(numeros);
// console.log(outros);

//solução 2 (apagará a outra var)
// numeros.length = 0;
// console.log(numeros);
// console.log(outros);

//solução 3
// numeros.splice(0,numeros.length);
// console.log(numeros);
// console.log(outros);

//solução 4 (custará muito do processador)

// while (numeros.length > 0)    
//     numeros.pop();

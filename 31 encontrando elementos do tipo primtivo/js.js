const numeros = [1,2,3,1,4];
console.log(numeros.indexOf(5));
//quando nao tiver esse numero no array ele retorna o -1 
//se o numero tiver no arrey, ele volta como indice do array

console.log(numeros.lastIndexOf(1));
//ultima aparição do numero 1, retorna o indice no qual foi a ultima vez q o 1 apareceu

console.log(numeros.indexOf(5) !== -1);
//retorna false pq de fato nao tem o 5
console.log(numeros.indexOf(1) !== -1);
//retorna true pq ta dizendo q nesse array tem o 1 e de fato tem

console.log(numeros.includes(2));
//forma mais facil de usar o comando acima
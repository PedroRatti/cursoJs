const numeros = [1,2,3];
console.log(numeros);

//inicio
numeros.unshift(0);
console.log(numeros);
//meio array.splice(indice onde quer colocar,se quer remover o numero q esta localizado nessa posicao,e o numero q quer colocar(ou termo))
numeros.splice(1,0,'a');
console.log(numeros);
//final
numeros.push(5);
console.log(numeros);
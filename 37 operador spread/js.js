const primeiro = [1,2,3];
const segundo = [4,5,6];

//ultima aula
//const combinado = primeiro.concat(segundo);
// const cortado = combinado.slice();



//spread (...)

const combinado = [...primeiro,'a',...segundo,'#'];
console.log(combinado);

const clonado = [...combinado];
console.log(clonado);
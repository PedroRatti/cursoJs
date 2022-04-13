//operador logico e (&&)
//retorna TRUE se os dois operandos forem true

//console.log(true && true); da true
//console.log(false && true); da false
//console.log(true && false); da false

var maiorDeIdade = true;
var possuiCarteiraDeTrabalho  = true;
var podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

var maiorDeIdade = false;
var possuiCarteiraDeTrabalho  = true;
var podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

//operador logico ou (||)
//retorna TRUE se um dos dois operandos forem true
var maiorDeIdade = false;
var possuiCarteiraDeTrabalho  = true;
var podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log(podeAplicar);

var maiorDeIdade = false;
var possuiCarteiraDeTrabalho  = false;
var podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log(podeAplicar);

//operador NOT (!)

var candidatoRecusado = !podeAplicar;
//depende das outras variaveis estarem de acordo com o operador q esta sendo utilizado, no caso o (||) ou  o (&&) nessa situação

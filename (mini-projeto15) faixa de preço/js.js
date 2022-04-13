//criar um array de objetos de faixa de preco para
//ela possa se usada em um site como mercado livre
//faixa, tooltip,minimo,maximo

//primeira opcao
var faixas = [
    {tooltip : 'até R$700', minimo : 0, maximo : 700},
    {tooltip : 'de R$700 a R$1000', minimo : 700, maximo : 1000},
    {tooltip : 'de R$1000 ou mais', minimo : 1000, maximo : 99999}
];
console.log(faixas);

//segunda opcao (factory function)
function criaFaixaPreco(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

var faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('a',1000,10000)
]
console.log(faixas2);

//terceira opcao (constructor fuction)
function FaixaPreco(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

var faixas3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
]
console.log(faixas3);
const marcas = [
    {id : 1, nome : 'a'},
    {id : 2, nome : 'b'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});
console.log(marca);




const pc = [
    {placaDeVideo : 'gtx1050ti', memoriaPlaca : '8gb'},
    {processador : 'i5', nucleo : 8},
    {memoria : '2x8gb', frequencia : 2666},
];

const pcs = pc.find(function(pcs){
    return pcs.memoria === '2x8gb'
});

console.log(pcs);

const pc1 = pc.find(function(pc1) {
    return pc1.nucleo === 8
});

const marcas = [
    {id : 1, nome : 'a'},
    {id : 2, nome : 'b'}
];

//"jeito ensinado anteriormente"
console.log(marcas.find(function(marca) {
    return marca.nome === 'a';
}));

//arrow function
console.log(marcas.find(marca => marca.nome === 'a'));
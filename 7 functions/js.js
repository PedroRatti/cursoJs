// verbo + subs
var corSite = 'azul';
function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor('vermelho','vinho');
console.log(corSite);


var municipio = 'floripa';
console.log(municipio);
function endereço(cidade,bairro,rua){
    municipio = cidade + ' ' + bairro + ' ' + rua;
};
endereço('floripa','córrego','pirineus');
console.log(municipio);

// a variavel tem que ter um nome diferente de alguma variavel dentro da função
//criar um objeto endereço que contem:
//rua
//cidade
//cep
//exibirEndereco(endereco)

//como eu fiz
function criarEndereco(rua,cidade,cep) {
    return {
        rua,
        cidade,
        cep
    }
}

function Endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco = new Endereco('pirineus','florianopolis','88037-615');
console.log(endereco);

//como era pra ser feito
var endereço = {
    rua : 'a',
    cidade : 'b',
    cep : 'c'
};

function exibirEndereco(endereço) {
    for (var chave in endereço)
        console.log(chave,endereço[chave]);
}
exibirEndereco(endereço);
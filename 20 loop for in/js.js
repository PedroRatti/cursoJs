const pessoa = {
    nome: 'pedro',
    idade: 18
};

for(var chave in pessoa) {
    console.log(chave);
}

const cores = ['vermelho','azul','verde'];

for (var indice in cores) {
    console.log(indice,cores[indice]);
}
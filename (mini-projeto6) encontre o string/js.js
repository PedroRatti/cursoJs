//criar um metodo para ler propriedades de um objeto e exibir
//somente as propriedades do tipo string que estao nesse objeto

const filme = {
    titulo : 'vingadores',
    ano : 2018,
    diretor : 'robin',
    personagem : 'homem-aranha'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}
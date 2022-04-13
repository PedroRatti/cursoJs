//criar neste exercicio um objeto de postagem de
//um blog que vai conteras seguintes propriedades
//postagem
//titulo
//mensagem
//autor
//visualizacoes
//mentarios (autor,mensagem)
//estaAoVivo

var postagem = {
    titulo :  'a',
    mensagem : 'b',
    autor : 'c',
    visualizacoes : 10,
    comentarios : [
        { autor : 'a',mensagem : 'b'},
        { autor : 'a',mensagem : 'b'}
    ],
    estaAoVivo : true
}
console.log(postagem);
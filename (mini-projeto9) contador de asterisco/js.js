//criar uma função que exibe a quantidade de *
//que aquela linha possui

exibirAsteriscos(60);

function exibirAsteriscos(linhas) {
    //  var padrao = '';
    //  for (var linha = 1; linha <= linhas; linha++){
    //     padrao += '*';
    //     console.log(padrao);
    // }

        for ( var linha = 1; linha <= linhas; linha++){
            var padrao = '';
            for (var i = 0; i < linha; i++){
                padrao += '*';
            }
        }
}
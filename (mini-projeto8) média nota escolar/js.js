//exercicio nota escolar
//obter a média a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A
const array = [70,90,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    var soma = 0;
    for (var nota of notas) {
        soma +=  nota;
    }
    const media = soma/(notas.length);

    if (media <= 59)
        return 'F';
    if (media <= 69)
        return 'D';
    if (media <= 79)
        return 'C';
    if (media <= 89)
        return 'B';
    else (media <= 100)
        return 'A';
}
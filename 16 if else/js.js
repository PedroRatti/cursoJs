//se a hora estiver entre 06:00 até 12:00 será Bom dia!
//se estiver entre 12:00 até 18:00 será Boa tarde!
//caso contrário será Boa noite!

var hora = 10;

if (hora > 6 && hora < 12) {
    console.log('Bom dia!');
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!');
}
else {
    console.log('Boa noite!');
}


var idade = 19;

if (idade > 18) {
    console.log('maior de idade');
}
else {
    console.log('menor de idade');
}


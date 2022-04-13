// falsy = undefined, null, 0, false, '', NaN(not a number)
// truthy


var corPersonalizada = '';
var corPadrao = 'azul';
var corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);
//parou no azul pois o '' é falsy

var corPersonalizada = 'vermelho';
var corPadrao = 'azul';
var corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);

//parou no vermelho pq ele ja é o primeiro valor truthy
function VerificarEntrada() {
    var NomeConvidado = document.getElementById('nome').value;
    var ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Pedro']
    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'
    }
    else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}
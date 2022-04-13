
//camelCase - umDoisTresQuatro
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('fazendo ligação...')
        }
    }
}


//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular,tamanhoTela,capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log('Fazendo ligação...');
    }
}

const celular = new Celular('Apple',5.5,5000);
console.log(celular);


function CriarComputador(processador,placaDeVideo,memoria,armazenamento){
    return {
        processador,
        placaDeVideo,
        memoria,
        armazenamento,
        ligar() {
            console.log('Ligando o PC...')
        }
    }
}


function Pc(processador,placaDeVideo,memoria,armazenamento) {
    this.processador = processador,
    this.placaDeVideo = placaDeVideo,
    this.memoria = memoria,
    this.armazenamento = armazenamento,
    this.ligar = function() {
        console.log('Ligando o PC...')
    }
}

const pc = new Pc('i5','gtx1050ti','2x8gb','1tb');
console.log(pc);




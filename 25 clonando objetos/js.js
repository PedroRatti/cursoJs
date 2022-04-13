const pc = {
    processador : 'i5',
    plavaDeVideo : 'gtx1050ti',
    armazenamento : '1tb',
    ligar : function () {
        console.log('Ligando o PC...');
    }
}
console.log(pc);

const pc2 =  Object.assign({
    memoria : '2x8gb'
},pc);
console.log(pc2);

const pc3 = {...pc};
console.log(pc3);
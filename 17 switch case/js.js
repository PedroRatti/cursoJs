var permissao; //comum,gerente,diretor
permissao = 'diretor';

switch (permissao) {
    case 'comum' :
    console.log('usuario comum');
    break;

    case 'gerente' :
    console.log('usuario gerente');
    break;

    case 'diretor' :
    console.log('usuario diretor');
    break;

    default:
    console.log('usuario não encontrado!');
}



var familia; 
familia = 'pai';

switch (familia) {
    case 'mãe' :
    console.log('perfil da mãe');
    break;

    case 'pai' :
    console.log('perfil do pai');
    break;

    default:
    console.log('nenhum perfil');
}
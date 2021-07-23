var agora = new Date();
var diaSemana = agora.getDay();//pegando o dia de Date();

/**PARA O JS, O RETORNO DO DIA É UM NÚMERO.
 * 0 - Domingo
 * 1 - Segunda
 * 2 - Terça
 * 3 - Quarta
 * 4 - Quinta
 * 5 - Sexta
 * 6 - Sábado
 */

//console.log(diaSemana);

switch(diaSemana) {
    case 0:
        console.log('DOMINGO');
        break;
    case 1:
        console.log('SEGUNDA');
        break;
    case 2:
        console.log('TERÇA');
        break;
    case 3:
        console.log('QUARTA');
        break;
    case 4:
        console.log('QUINTA');
        break;
    case 5:
        console.log('SEXTA');
        break;
    case 6:
        console.log('SÁBADO');
        break;
    
    default:
        console.log('Dia Inválido!!!');
        break;
}
var numero = document.getElementById('numero');
var resultado = document.getElementById('resultado');


function contar() {
    numero = Number(numero.value);
    console.log(numero);
    for(var contador = 0; contador <= 10; contador++) {
        resultado.innerHTML += `${numero}  *  ${contador}  =  ${numero * contador}<br>`;
    }
}
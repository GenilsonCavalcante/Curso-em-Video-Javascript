var inicio = document.getElementById("inicio");
var fim = document.getElementById("fim");
var pular = document.getElementById("pular");

var res = document.getElementById("res");


function contar() {

    inicio = Number(inicio.value);
    fim = Number(fim.value);
    pular = Number(pular.value);

    if (inicio <= fim && inicio != '') {
        while (inicio <= fim) {
            alert("Olá");
    
            //inicio = 2; Fim = 6; pular = 2; ===> 2, 4, 6 ===> inicio + pular > fim: Já é o final.
            if (inicio + pular > fim) {
                res.innerHTML += `${inicio}!`;
            } else {
                res.innerHTML += `${inicio}, `;
            }
            console.log(inicio);
            inicio = inicio + pular;
        }
    } else {
        alert("Por favor, informe o N° do Início! Ele deve ser menor ou igual ao N° do Fim");
        location.reload();
    }


}
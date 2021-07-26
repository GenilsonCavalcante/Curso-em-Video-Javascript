function verificar() {
    var data = new Date();
    var ano = data.getFullYear();//Pega os 4 dígitos do ano.
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML = `Idade calculada: ${idade}`;
    }

    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');//Criando um id chamado foto para img.
    img.style.margin = '20px';

    if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 5) {
            //Bebe
            img.setAttribute('src', 'img/bebe-masculino.png');
        } else if (idade >= 5 && idade < 10) {
            //Criança
            img.setAttribute('src', 'img/crianca-masculino.png')
        } else if (idade >= 10 && idade < 18) {
            //Adolescente
            img.setAttribute('src', 'img/adolescente-masculino.png');
        } else if (idade >= 18 && idade < 40) {
            //Adulto
            img.setAttribute('src', 'img/adulto-masculino.png');
        } else if (idade >= 40 && idade < 50) {
            //Adulto entre 40 & 50
            img.setAttribute('src', 'img/adulto-40-masculino.png');
        } else if (idade >= 50 && idade < 60) {
            //Idoso entre 50 & 60
            img.setAttribute('src', 'img/idoso-50-masculino.png');
        } else if (idade >= 60 && idade < 150) {
            //Idoso
            img.setAttribute('src', 'img/idoso-masculino.png');
        } else {
            window.alert('Isso tudo???');
        }

    } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade < 5) {
            //Bebe
            img.setAttribute('src', 'img/bebe-feminino.png');
        } else if (idade >= 5 && idade < 10) {
            //Criança
            img.setAttribute('src', 'img/crianca-feminino.png')
        } else if (idade >= 10 && idade < 18) {
            //Adolescente
            img.setAttribute('src', 'img/adolescente-feminino.png');
        } else if (idade >= 18 && idade < 40) {
            //Adulto
            img.setAttribute('src', 'img/adulto-feminino.png');
        } else if (idade >= 40 && idade < 50) {
            //Adulto entre 40 & 50
            img.setAttribute('src', 'img/adulto-40-feminino.png');
        } else if (idade >= 50 && idade < 60) {
            //Idoso entre 50 & 60
            img.setAttribute('src', 'img/idoso-50-feminino.png');
        } else if (idade >= 60 && idade < 150) {
            //Idoso
            img.setAttribute('src', 'img/idoso-feminino.png');
        } else {
            window.alert('Isso tudo???');
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);

}
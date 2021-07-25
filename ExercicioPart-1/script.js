function carregar() {
    var msg = window.document.getElementById(`msg`);
    var img = window.document.getElementById(`imagem`);
    var data = new Date();
    var hora = data.getHours();
    //var hora = 19;
    msg.innerHTML = `Agora são ${hora} hora(s).`;

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'img/Manha-Cortada.png';
        document.body.style.background = '#3ea6f0';
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'img/Tarde-Cortada.png';
        document.body.style.background = '#f66102d4';
    } else {
        //BOA NOITE!
        img.src = 'img/Noite-Cortada.png';
        document.body.style.background = '#294884';
    }
}


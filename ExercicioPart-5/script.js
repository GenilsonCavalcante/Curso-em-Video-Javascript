function tabuada() {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);

        tab.innerHTML = ''; //limpando a tabuada para não ficar com scroll.

        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} * ${c} = ${n * c}`;
            item.value = `tab${c}`;//Add um value para cada option.
            tab.appendChild(item);
        }
    }
}
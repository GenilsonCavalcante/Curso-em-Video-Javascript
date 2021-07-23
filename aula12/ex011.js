var idade = 17;

console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Você não vota');
}else {
    if (idade < 18 || idade > 67) {
        console.log('Voto opcional');
    }else {
        console.log('Voto obrigatório - Maior ou igual a 18');
    }
}

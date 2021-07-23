//let num = [1];

/* console.log(`Nosso vetor é o: ${num}`);
console.log(num); */

var lista = [];

for (var numero = 0; numero < 10; numero++) {
    lista[numero] = numero + 1;
    console.log(lista[numero]);
}

lista.push(2); //Criando um ultimo elemento no array.
console.log(lista);
console.log(lista.length); //Para saber o tamanho do array.

console.log(lista.sort()); //Faz com que ordene os elementos em ordem crescente.

//console.log(lista[0]); //Acessando um valor pelo índice, individualmente.

var num = [4, 5, 6, 7, 8];

/* for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos]);
} */

//Existe uma sintaxe do for que é mais simplificada:

for (let pos in num) {
    console.log(num[pos]);
}

//Buscando o índice através de valores do array:

console.log(num.indexOf(9));//Reavultando no índice 3. O valor -1, significa que não existe tal elemento no array.

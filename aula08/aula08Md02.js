/*Crie uma função mostrarNumero() que receba N parâmetros, e retorne o menor número entre eles, 
utilizando a função Math.min(). 
Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, 
sendo portanto, necessário expandir os valores.
*/

let numeros = [10, 5, 0, 1, 2, 3, 5, 7];

console.log('O maior numero é ', Math.max(...numeros));

console.log('O menor numero é ', Math.min(...numeros));

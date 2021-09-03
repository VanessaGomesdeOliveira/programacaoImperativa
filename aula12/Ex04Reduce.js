//Aula 12 - 30.06.2021
/*  alt + shift + a */ 
/* O reduce é um método que reduz a matriz a um único valor
O método executa uma função fornecida para cada valor da matriz
O valor de retorno da função é armazenada em um acumulador (resultado / total) */

const numeros = [1, 2, -3, 4, 5, 0, 7, 8, 9, 19]

let resultado = numeros.reduce(function(acumulador,elemento) {
return acumulador+elemento;
})

console.log(resultado);



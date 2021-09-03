/* Numeros primos = divisiveis por 1 e por ele mesmo.

Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. 
Além disso, crie outro array, desta vez chamado numeros, 
que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.*/

numerosPrimos = [1, 2, 3, 5, 7];

numeros = [10, 5, 0, ...numerosPrimos];

console.log(numeros);
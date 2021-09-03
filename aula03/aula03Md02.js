/*2) Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:

Soma;
Subtração;
Multiplicação;
Divisão.



As 4 funções deverão receber dois parâmetros e retornar o resultado da operação matemática correspondente.
*/

let calculadora = {
    somar : function (numA, numB) {
        return numA + numB
    },
    subtrair : function (numA, numB) {
        return numA - numB
    },
    multiplicar : function (numA, numB) {
        return numA * numB
    },
    dividir : function (numA, numB) {
        if (numB != 0){
            return numA / numB
        } else {
            return ("Impossivel dividir por 0");
        }
    },
}

console.log(calculadora.somar(5, 5));
console.log(calculadora.subtrair(5, 5));
console.log(calculadora.multiplicar(5, 5));
console.log(calculadora.dividir(5, 0));
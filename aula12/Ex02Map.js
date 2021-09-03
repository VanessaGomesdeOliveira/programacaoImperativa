//Aula 12 - 30.06.2021

//O map() -> método que cria uma nova matriz com os resultados da chamada de uma função, para cada chamada de uma função, para cada elemento da matriz*/

let salarios = [1050.75, 2000.75, 5000.98, 7500.89];
let reajuste = elemento => elemento * 1.4;
let salariosAtualizados = salarios.map(reajuste);

//função fora
//function reajuste(elemento) {
//    return elemento*1.4; //atualizando em 40% de aumento
//};

console.log(salarios);

console.log(salariosAtualizados);
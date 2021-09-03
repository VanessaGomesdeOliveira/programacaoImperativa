//07/07/2021
//Aula 14 - JSON
//ex02.js

let frutas = '{"fruta":"banana","preço":8.50,"tipo":["prata","maça","nanica","da terra","ouro"], "origem":"brasil"}';
//console.log(frutas);
let frutasConvertidasJs = JSON.parse(frutas);
console.log(frutasConvertidasJs.origem);

//converter para JSON
let frutasConvertidasJSON = JSON.stringify(frutasConvertidasJs);
console.log(frutasConvertidasJson);


//07/07/2
//Aula 14
//ex03.js
//objetivo da aplicação: Escrevendo arquivos (teste.txt)
//fs = file system
// apaga o arquivo que já existe (sobreescreve o arquivo)

const fs=require('fs');
let frutas = '{"fruta":"banana","preço":8.50,"tipo":["prata","maça","nanica","da terra","ouro"],"origem":"brasil"}';

//fs.writeFileSync('teste.txt', frutas);
fs.writeFileSync('teste1.txt', frutas);

//ler o arquivo
let lerJson = fs.readFileSync('teste.txt','utf-8'); //utf-8 é pra converter numa linguagem que a gente entenda (codificacao de caracteres)
console.log(lerJson);

//converter objJSON para objJs
let converterLerJson = JSON.parse(lerJson);
console.log(converterLerJson);
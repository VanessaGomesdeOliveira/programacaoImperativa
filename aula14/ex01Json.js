//07/07/2021
//Aula 14 - JSON

let dadosJson = '{"nome":"Vanessa", "sobrenome": "Oliveira", "Sexo": "Feminino"}';
console.log(dadosJson);

//Json é um objeto nativo

//desserialização ou parsing (conversão JSON para um objeto JS)

//-- início --
let dadosConvertidosJs = JSON.parse(dadosJson); //converter em objeto literal em JS
console.log(dadosConvertidosJs);
//console.log(dadosConvertidosJs.nome.toUpperCase());
//-- término --

//serialização cria um objeto JSON (conversão JS para JSON)
// -- início --
let novoDadoJson = JSON.stringify(dadosConvertidosJs); //converter JS para JSON
console.log(novoDadoJson);
//-- término --

let objetoLiteral = {materia: 'Prog. Imperativa', professor: 'William'};
objetoLiteral.professor = objetoLiteral.professor.toUpperCase();
console.log(objetoLiteral);

//Transformar em JSON - parsing
let objetoConvertidoJson = JSON.stringify(objetoLiteral);
console.log(objetoConvertidoJson);
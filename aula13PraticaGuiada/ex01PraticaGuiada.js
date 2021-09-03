//30/06/2021
/*Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.
Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.*/

//Criar função Construtora
function Aluno(nome, faltas, ...notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.media = notas.reduce((ac, num)=>{return ac+num})/notas.length; //array function para calculo de média, o reduce soma os valores do array.
}

// Cria os objetos aluno... com a classe Aluno
let alunoUm = new Aluno("Um", 2, 1, 2, 3, 4, 5, 6);
let alunoDois = new Aluno("Dois", 2, 1, 2, 3, 4, 5, 6);
let alunoTres = new Aluno("Tres", 2, 1, 2, 3, 4, 5, 6);
let alunoQuatro = new Aluno("Quatro", 2, 1, 2, 3, 4, 5, 6);

// Adiciona os alunos a lista
let alunos = [alunoUm, alunoDois, alunoTres, alunoQuatro];

module.exports = { alunos, Aluno }; //preparando o modulo para ser exportado por outros arquivos

/*30/06/2021
Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
*/

let { alunos, Aluno } = require('./ex01PraticaGuiada'); // Exportação dos módulos

// Cria o objeto
let curso = {
    nomeCurso: "CTD",
    notaAprovacao: 7,
    faltasMax: 6,
    listaEstudantes: [...alunos],
}

// Cria o objeto aluno 5 com a classe Aluno
let alunoCinco = new Aluno("Cinco", 3, 2, 3, 2, 1, 5);

// Adiciona o aluno cinco na lista
curso.listaEstudantes.push(alunoCinco);

// Exibe a nova lista de estudantes
console.log(curso.listaEstudantes);

//let situacaoAprovacao = curso.listaEstudantes.media >= curso.notaAprovacao ? true : false;

//console.log(situacaoAprovacao);
//Desafio//

function Alunos(nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia=(notas)=>{
        let resultado = this.notas.reduce((acumulador,item)=>acumulador+item)/this.notas.length;
        return resultado.toFixed(1);
    }
    this.adicionarFaltas=()=>this.faltas++;
}

module.exports=Alunos;

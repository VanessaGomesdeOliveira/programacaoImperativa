//Aula 09 - 21.06.21
//Modulo (fora da pasta modulos)
//Utilizando o modulo criado na pasta
//ex05Importar.js   

const calculo = require('./modulos/exExpCalculos.js');

function calcular(a,b,operacao) {
    let resultado;

    if (operacao=='+') {
        resultado = calculo.soma(a,b);
    }
    if (operacao=='-') {
        resultado = calculo.subtracao(a,b);
    }
    if (operacao=='*') {
        resultado = calculo.multiplicacao(a,b);
    }
    if (operacao=='/') {
        resultado = calculo.divisao(a,b);    
    }
    console.log(resultado);
}

calcular(2,50,'+');
calcular(2,50,'-');
calcular(2,50,'*');
calcular(2,0,'/');
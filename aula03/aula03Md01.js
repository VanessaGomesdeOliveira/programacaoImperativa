/*1) Criar a função calcularIndiceDeMassaCorporal que receba a altura em centímetros e o peso em quilogramas e calcule o IMC do usuário (peso / altura2).
Em seguida, execute a função testando diferentes valores.*/

function calcularIndiceDeMassaCorporal (altura, peso) {
    let imc = peso / (altura * altura);
    console.log(imc);
};

calcularIndiceDeMassaCorporal (1.65, 65);


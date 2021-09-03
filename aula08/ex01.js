//aula 08 - 16.06.21
//280, 330, 1500
//Lucro: 50%
//Lista de valores de custo dos produtos
//Lista de valores de venda ao consumidor

let precoCusto = [280, 330, 1500, 3300, 150];
let margemLucro = 1.50;

function custoInicial(precoCusto) {
    console.log("******Relatório Preço Custo*******")
    for (let i = 0; i < precoCusto.length; i++){
        console.log("Posição do Array é: " +i+" - "+precoCusto[i]);
    }
}
custoInicial(precoCusto);

function precoVenda(precoCusto) {
    console.log("\n******Relatório Preço ao Consumidor*******")
    for (let i = 0; i < precoCusto.length; i++){
        let resultado = precoCusto[i]*margemLucro;
        console.log("Preço de Venda é: " +i+" - "+resultado);
    }
}
precoVenda(precoCusto);
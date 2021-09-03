//Aula 07 - callback

//function nomeCompleto (nome, sobrenome) {
//    return nome + ' ' + sobrenome;
//};

//function bomDia (nome, sobrenome, callback) {
//    return 'Olá, ' + callback(nome, sobrenome);
//};
//
//console.log(bomDia ('Amanda', 'Ferreira', nomeCompleto));


/*Crie uma função acaoCarro(), que receberá uma callback como parâmetro. 
Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.*/

function acaoCarro (callback);

function andar () {
    return 'Carro está andando';
};

function parar () {
    return 'Carro parou';
};

console.log(acaoCarro(andar));


/*Defina um novo objeto ‘conta’ que contenha as seguintes propriedades:
Número de conta
Saldo
Nome do Titular
Crie um método chamado ‘depósito’ que tem a quantidade de dinheiro como parâmetro de entrada. 
Ao fazer um depósito, a quantia em dinheiro deve ser adicionada ao saldo existente. 
O método também deve imprimir na tela o tipo de transação realizada e o novo saldo.
Crie um novo método chamado saque, como o método de depósito, 
deve consistir em um parâmetro numérico que será a quantia de dinheiro que queremos sacar. 
Esta quantia será subtraída do saldo existente. 
Caso o valor do saque seja superior ao saldo disponível, deve-se imprimir na tela a mensagem “Fundos Insuficientes”, 
caso contrário deve-se imprimir o tipo de transação realizada e o novo saldo.
Crie uma função construtora de nosso objeto de conta.
Instancie os objetos com diferentes valores iniciais e teste os métodos.
*/

let conta = {
    numeroConta: 1001,
    saldo: 100,
    nomeTitular: 'Vanessa',
    entrada: 50,
    retirada: 40,
    //deposito: function () {
    //   return this.saldo + this.entrada;
    //},
    saque: function () {
        if (saldo > retirada) {
        return this.saldo - this.retirada;
        } else {
            console.log("Fundos insuficientes")
            };
    },
};

console.log(conta.saque());

/*
function Gato(nome,idade,sexo,cor) {
    this.nome=nome;
    this.idade=idade;
    this.sexo=sexo;
    this.cor=cor;
    //atenção no construtor quando for função*******
    this.comportamento= function() {return 'A '+this.nome+' é muito brincalhona'};
}
//criar um objeto a partir do construtor -
//INSTANCIAR - OBJETOS
let gato = new Gato('Tiffany',11,'fêmea','marrom');
let gato1= new Gato('Daphne',11,'fêmea','branca');

console.log(gato1);
console.log(gato.nome);
console.log(gato1.comportamento());
*/




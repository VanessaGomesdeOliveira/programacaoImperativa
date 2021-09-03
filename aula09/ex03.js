//Aula 09 - 21.06.21
//Objetos Literais

let carro = {
    placa:"ADF1234",
    cor: "prata",
    ano: 2021,
    flex: true,
    mostrar: function(){
        return 'Características do seu carro novo:\nPlaca = '+ carro.placa+ '\nCor = '+this.cor+
        '\nano = '+this.ano+
        '\ntotal flex = '+this.flex;
    }
}

console.log(carro.mostrar());

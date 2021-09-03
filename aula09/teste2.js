//now = new Date
//console.log ( now.getHours() + ":" + now.getMinutes());

var horario = new Date();

var hora = String (horario.getHours()).padStart(2, '0');

var minuto = String (horario.getMinutes()).padStart(2, '0');

horarioAtual = hora + ':'+ minuto;

console.log(horarioAtual);

module.exports=horarioAtual;

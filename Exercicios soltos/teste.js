let nomeJogador = "João"
let golsJogador = 0
let precoEmDolares = 10000

function fazerGol (){
    golsJogador++
    console.log(` ${golsJogador} “GOL!!!!!!!!!” `)
    return(golsJogador);
}
console.log(`3)`);

fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();

console.log(`O jogador ${nomeJogador}, fez ${fazerGol()} gols e seu valor é de $${precoEmDolares}.`);
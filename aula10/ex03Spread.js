// spread - é muito util para quebrar um array

function somar (x, y, z) {
    return x + y + z;
}

const numeros = [1, 2, 3];

console.log ('total............: ' +somar(...numeros));
console.log('Maior número....'+Math.max(...numeros));

let nome = 'William';
let sobrenome = 'Pantoja';

let nomeCompleto = [nome, sobrenome];
console.log(...nomeCompleto);
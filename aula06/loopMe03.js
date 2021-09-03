/*1) Escrever um programa que imprime 25 termos da série 11 - 22 - 33 - 44, etc. */

//let contador = 1;

//while (contador <= 25) {
//    console.log(11 * contador)
//    contador++
//}

//for (i = 1; i <= 25; i++){
//    console.log(i*11);
//}

let retorno = '';
for (i = 1; i <= 25; i++){
    retorno = retorno + (i * 11);

    if (i < 25)
    {
        retorno = retorno + ', '
    }
}

console.log(retorno)


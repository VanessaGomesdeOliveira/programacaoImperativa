/*2) Mostrar os múltiplos de 8 até o valor 500. A tela deve mostrar 8 -16 -24;*/

let contador = 1;

while(true)
{
    let valor = contador * 8; 

    if (valor > 500)
    {
        break;
    }

    console.log(valor);
    contador++;
}




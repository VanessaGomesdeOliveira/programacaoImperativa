var listaMenu = [
    {
        id: 1,
        nome: 'Pipoca',
        tempo: 10
    },
    {
        id: 2,
        nome: 'Macarrão',
        tempo: 8
    },
    {
        id: 3,
        nome: 'Carne',
        tempo: 15
    },
    {
        id: 4,
        nome: 'Feijão',
        tempo: 12
    },
    {
        id: 5,
        nome: 'Brigadeiro',
        tempo: 8
    }
];

for (var i = 0; i < listaMenu.length; i++) {
    console.log(`${listaMenu[i].id} - ${listaMenu[i].nome}`);
}

function prepararMenu(menu, tempo) {
    
    var menuSelecionado = listaMenu.find(obj => obj.id === menu);

    var tempoSelecionado = tempo ?? menuSelecionado.tempo;

    if (!menuSelecionado) {
        console.log(`\nPrato inexistente`)
        return;  
    }   else if (tempo && tempo < menuSelecionado.tempo) {
        console.log('Tempo insuficiente');
        return;
        }   else if (tempo && tempo >= (menuSelecionado.tempo*2)) {
            console.log('Ih, prato queimou');
            return;
            }   else if (tempo && tempo >= (menuSelecionado.tempo*3)) {
                console.log('Kabummm');
                return;
                }   else if (tempo && tempo == menuSelecionado.tempo) {
                    console.log(`${menuSelecionado.nome} pronto(a) em ${tempoSelecionado} segundos`);
                    return;

//    
//
//    console.log(`${menuSelecionado.nome} pronto(a) em ${tempoSelecionado} segundos`);
//
};

prepararMenu(5);
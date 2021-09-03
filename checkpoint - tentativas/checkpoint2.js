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
    console.log(`${listaMenu[i].id} - ${listaMenu[i].nome} - ${listaMenu[i].tempo} segundos`);
}

function PrepararMenu(menu, tempo) {
    var menuSelecionado = listaMenu.find(obj => obj.id === menu);

    if (!menuSelecionado)
    {
        console.log(`\nPrato inexistente`)
        return;
    }

    if (tempo && tempo < menuSelecionado.tempo)
    {
        console.log(`\nTempo insuficiente`)
        return;
    }

    if (tempo && tempo > (menuSelecionado.tempo * 3))
    {
        console.log(`\nKabumm`)
        return;
    }

    console.log('\nPreparando prato...');

    var tempoSelecionado = tempo ?? menuSelecionado.tempo;

    setTimeout(function (menuSelecionado, tempoSelecionado) {
        console.log(`\n${menuSelecionado.nome} pronto(a) em ${tempoSelecionado} segundos. bom apetite!!`);
    }, tempoSelecionado * 1000, menuSelecionado, tempoSelecionado);
}

PrepararMenu(1, 10);
function preparo (comida, tempo) {

if (comida == 'pipoca' || comida == 'macarrao' || comida == 'carne' || comida == 'feijao' || comida == 'brigadeiro') {
    switch (comida) {
        case 'pipoca':
            if (tempo == 10) { console.log ('A pipoca está pronta, bom apetite'); } 
            else if (tempo < 10) { console.log ('Tempo Insuficiente, não deu pra preparar a pipoca'); }
            else if (tempo > 10 && tempo <= 20) { console.log ('A pipoca queimou');}
            else if (tempo >= 30) { console.log ('Kabummmmmmm, voou pipoca pra todo lado');}
            break;
        case 'macarrao':
            if (tempo == 8) { console.log ('O macarrão está pronto, bom apetite'); } 
            else if (tempo < 8) { console.log ('Tempo Insuficiente, não deu pra preparar o macarrão'); }
            else if (tempo > 8 && tempo <= 16) { console.log ('O macarrão queimou');}
            else if (tempo >= 24) { console.log ('Kabummmmmmm, voou macarrão pra todo lado');}
            break;
        case 'carne':
            if (tempo == 15) { console.log ('A carne está pronta, bom apetite'); } 
            else if (tempo < 15) { console.log ('Tempo Insuficiente, não deu pra preparar a carne'); }
            else if (tempo > 15 && tempo <= 30) { console.log ('A carne queimou');}
            else if (tempo >= 30) { console.log ('Kabummmmmmm, voou carne pra todo lado');}
            break;
        case 'feijao':
            if (tempo == 12) { console.log ('O feijão está pronto, bom apetite'); } 
            else if (tempo < 12) { console.log ('Tempo Insuficiente, não deu pra preparar o feijão'); }
            else if (tempo > 12 && tempo <= 24) { console.log ('O feijão queimou');}
            else if (tempo >= 36) { console.log ('Kabummmmmmm, voou feijão pra todo lado');}
            break;
        case 'brigadeiro':
            if (tempo == 8) { console.log ('O brigadeiro está pronto'); } 
            else if (tempo < 8) { console.log ('Tempo Insuficiente, não deu pra preparar o brigadeiro'); }
            else if (tempo > 8 && tempo <= 16) { console.log ('O brigadeiro queimou');}
            else if (tempo >= 24) { console.log ('Kabummmmmmm, voou brigadeiro pra todo lado');}
            break;
    }

} else {
    console.log ('Prato Inexistente');
}

}

preparo ('pipoca', 10);
preparo ('macarrao', 6);
preparo ('carne', 30);
preparo ('feijao', 36);
preparo ('brigadeiro', 8);
preparo ('cafe', 9);
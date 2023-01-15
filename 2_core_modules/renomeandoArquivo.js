const fs = require("fs");

const arqvOld = 'arquivo.txt';
const arqNovo = 'newArquivo.txt';


fs.rename(arqvOld, arqNovo, (err) => {

    if (err) {
        console.log(err);
        return;
    };
    console.log(`arquivo ${arqvOld} foi  renomeado para ${arqNovo}`);
})
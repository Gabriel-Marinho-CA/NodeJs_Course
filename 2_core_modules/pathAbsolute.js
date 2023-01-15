const path = require('path');

// path absolute
console.log(path.resolve('newArquivo.txt'));

// formar path

const midFolder = 'relatorios';
const fileName = 'gabriel.txt';

const finalPath = path.join('/','arquivos',midFolder,fileName);

console.log(finalPath);
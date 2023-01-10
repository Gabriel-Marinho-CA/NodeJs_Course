const fs = require("fs");

console.log("Começando");

fs.writeFileSync("arquivo.txt", "diga oi");

console.log("Fim");




console.log("Começando 2");

fs.writeFile("arquivo2.txt", "bem vindo 2", ((err) => {
    console.log(err);
    setTimeout(() => console.log("Arquivo criado"), 1000)
}))

console.log("Fim 2");
const fs = require("fs"); // fyle system

fs.readFile("arquivo.txt", "utf-8", (err,data) => {

    if(err) console.log(err);

    console.log(data)
})

const modulos = require("./module.mjs");
const somaFunction = modulos.soma;

console.log(somaFunction(5,11))

// import soma from "./module.mjs"


soma(3,5)

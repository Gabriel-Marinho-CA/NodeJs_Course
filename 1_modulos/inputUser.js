const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual linguagem favorita? ", (tec) => {
    console.log(`Linguagem preferida é : ${tec}`);
    readline.close();
})
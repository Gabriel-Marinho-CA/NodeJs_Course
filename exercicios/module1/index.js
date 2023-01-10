const inquirer = require('inquirer');

const chalk = require("chalk");


inquirer.prompt([{
        name: "nome",
        msg: "Digite seu nome:"
    },
    {
        name: "idade",
        msg: "Digite sua idade:"
    }
]).then((res) => {
    if (!res.nome || !res.idade) throw new Error("O nome e a idade sao obrigatorios");
    console.log(chalk.bgYellow.black(`O nome é ${res['nome']} a idade é ${res['idade']}`));
}).catch((e) => {
    console.log(chalk.bgRed.black(e));
})
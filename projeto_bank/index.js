// modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// modulos internos
const fs = require("fs");


operation();

function operation() {
    inquirer.prompt(
            [{
                type: 'list',
                name: 'action',
                message: 'O que voce deseja fazer',
                choices: [
                    'Criar Conta',
                    'Consultar Saldo',
                    'Depositar',
                    'Sacar',
                    'Sair'
                ]
            }]
        )
        .then((res) => {

            const action = res['action'];

            switch (action) {
                case 'Criar Conta':
                    createAccout()
                    break;

                case 'Consultar Saldo':
                    getAccountBalance();
                    break;

                case 'Depositar':
                    deposit();
                    break;

                case 'Sacar':
                    withDraw()
                    break;

                case 'Sair':
                    console.log(chalk.bgBlue.black('Obrigado por usar o Accounts'));
                    process.exit();
                    break;
            }


        }).catch((e) => {
            console.log(e);
        })
}

// create account

function createAccout() {
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));

    buildAccount();
}

function buildAccount() {
    inquirer.prompt(
        [{
            name: 'AccoutName',
            msg: 'Digite um nome para sua conta'
        }]
    ).then((res) => {
        const accountName = res['AccoutName'];

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts');
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta conta já exista, escolha outro nome'));
            buildAccount();
            return;
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance":0}', function (err) {
            console.log(err)
        });

        console.log(chalk.green('Parabéns sua conta foi criada!!!'));

        operation();


    }).catch((e) => {
        console.log(e);
    })
}

// add an amount to user account

function deposit() {
    inquirer.prompt([{
            name: 'AccountName',
            msg: 'Qual o nome da sua conta?'
        }])
        .then((res) => {

            const accountName = res['AccountName'];

            // Verify if account exists
            if (!checkAccount(accountName)) {
                return deposit();
            }

            inquirer.prompt([{
                    name: 'amount',
                    msg: 'Quanto você deseja depositar?'
                }])
                .then((money) => {

                    const amount = money['amount'];

                    // add an amount
                    addAmount(accountName, amount)
                    operation()

                }).catch((e) => console.log(e));

        }).catch((err) => {
            console.log(err)
        })
}

function checkAccount(AccountName) {
    if (!fs.existsSync(`accounts/${AccountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe escolha outra conta'));
        return false;
    }

    return true;
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName);


    if (!amount) {
        console.log(chalk.bgRed.black('\n Ocorreu um erro, tente novamente mais tarde \n'));
        return deposit();
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err);
        }
    )

    console.log(chalk.green(`\n Foi depositado o valor de R$${amount} na sua conta \n`));

}

function getAccount(accountName) {
    const accontJson = fs.readFileSync(`accounts/${accountName}.json`, {
        enconding: 'utf8',
        flag: 'r'
    });

    return JSON.parse(accontJson);
}


// show account balance

function getAccountBalance() {
    inquirer.prompt([{
        name: 'AccoutName',
        msg: ' Qual o nome da sua conta?'
    }]).then((res) => {

        const accountName = res['AccoutName'];

        // verify if account exists

        if (!checkAccount(accountName)) return getAccountBalance();

        const accountData = getAccount(accountName);

        console.log(chalk.bgBlue.black(`Olá, o saldo da sua conta é ${accountData.balance}`));
        operation();


    }).catch((e) => console.log(e));
}


// Withdraw an amount from user account

function withDraw() {

    inquirer.prompt([{
        name: 'AccountName',
        message: ' Qual o nome da sua Conta?'
    }]).then((res) => {

        const accountName = res['AccountName'];

        if (!checkAccount(accountName)) return withDraw();


        inquirer.prompt([{
                name: 'amount',
                msg: 'Quanto você deseja sacar?'
            }])
            .then((money) => {

                const amount = money['amount'];

                removeAmount(accountName, amount);

            }).catch((e) => console.log(e))

    }).catch((er) => console.log(er))

}

function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if (!amount) {
        console.log(chalk.bgRed.black('\n Ocorreu um erro, tente novamente mais tarde \n'));
        return withDraw();
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black(`\n O valor ${amount} está indisponivel! \n`));
        return withDraw();
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        ((er) => console.log(er))
    );

    console.log(chalk.green(`Foi realizado um saque de ${amount} da sua conta!`));
    operation();
}
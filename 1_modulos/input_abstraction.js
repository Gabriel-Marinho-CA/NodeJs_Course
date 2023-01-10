const inquirer = require('inquirer');

inquirer.prompt([{
        name: 'p1',
        msg: 'Qual primeira nota'
    },
    {
        name: 'p2',
        msg: 'Qual segunda pergunta'
    }
]).then((answ) => {

    const media = (parseInt(answ.p1)+parseInt(answ.p2))/2; 
    
    console.log(media);

}).catch((e) => {
    console.log(e);
})
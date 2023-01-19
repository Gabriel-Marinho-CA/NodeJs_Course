const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const user = {
        name: 'Gabriel',
        surname: 'Marinho'
    }
    const idade = 30;

    res.render('home', { user:user, idade });
});

app.listen(3000, (req, res) => {
    console.log('Rodando na porta 3000');
})
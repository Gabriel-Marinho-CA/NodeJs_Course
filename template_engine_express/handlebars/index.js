const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars');

app.get('/', (req,res) => {
    res.render('main');
});  

app.listen(3000, (req,res) => {
    console.log('Rodando na porta 3000');
})
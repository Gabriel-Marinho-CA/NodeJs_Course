const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');



app.get('/', (req,res) => {
    res.render('home');
});

const connect = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'nodemysql'
});


connect.connect(function(err) {
    if(err) {
        console.log(err);
    }

    console.log('conectou ao mysql');

    app.listen(3000);
})
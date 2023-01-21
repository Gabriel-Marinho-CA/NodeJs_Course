
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));


// ----------------------------------- //


app.get('/', (req,res) => {
    res.render('home');
});

app.post('/books/insertbook', (req,res) => {

    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql = `
        INSERT INTO books (title,pageqty)
        VALUES ( '${title}', '${pageqty}');
    `;

    connect.query(sql, (err) => {
        if(err) {
            console.log(err);
            return;
        };

        res.redirect('/books');
    })

});


app.get('/books', (req,res) => {
    const sql = "SELECT * FROM books";

    connect.query(sql,(err, data)=> {

        if(err) {
            console.log(err);
            return;
        };

        const books = data;

        console.log(data);

        res.render('books', {books})
      
    })
})


// ------------------------------------- //


const connect = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database: 'nodemysql'
});


connect.connect(function(err) {
    if(err) {
        {
            console.log(err);
            return;
        };
    }

    console.log('conectou ao mysql');

    app.listen(3000);
})
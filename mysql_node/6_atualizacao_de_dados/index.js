const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));


// ----------------------------------- //


app.get('/', (req, res) => {
    res.render('home');
});

app.post('/books/insertbook', (req, res) => {

    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql = `
        INSERT INTO books (title,pageqty)
        VALUES ( '${title}', '${pageqty}');
    `;

    connect.query(sql, (err) => {
        if (err) {
            console.log(err);
            return;
        };

        res.redirect('/books');
    })

});


app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books";

    connect.query(sql, (err, data) => {

        if (err) {
            console.log(err);
            return;
        };

        const books = data;

        res.render('books', {
            books
        })

    })
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM books where idbooks = ${id}`;

    connect.query(sql, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const books = data[0];

        res.render('book', {
            books
        })
    })
});

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id;


    const sql = `SELECT * FROM books WHERE idbooks = ${id}`;

    connect.query(sql, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        const books = data[0];

        res.render('editbook', {
            books
        })
    })
});

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const pageqty = req.body.pageqty;


    const sql = `UPDATE books SET title = "${title}", pageqty = "${pageqty}" WHERE idbooks = "${id}"`;

    connect.query(sql, function (err) {
        if (err) {
            console.log(err);
            return;
        }

        res.redirect('/books')
    })
});


// ------------------------------------- //


const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});


connect.connect(function (err) {
    if (err) {
        {
            console.log(err);
            return;
        };
    }

    console.log('conectou ao mysql');

    app.listen(3000);
})
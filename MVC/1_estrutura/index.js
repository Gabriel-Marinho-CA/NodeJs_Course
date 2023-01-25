const express = require("express");
const handlebars = require("express-handlebars");
const conn = require("./db/conn");

// ===================== //

const app = express();


app.engine('handlebars', handlebars.engine());

app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(express.static('public'));

app.listen(3000);

// ===================== //


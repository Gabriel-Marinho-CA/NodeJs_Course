const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const basePath = path.join(__dirname, 'templates');

const users = require('./users');

// ler o body

// toda req do body é transformada em obj js, que conseguiimos ler por req.body

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());


const checkAuth = function (req, res, next) {
    req.authStatus = false;

    if (req.authStatus) {
        console.log('Usuário logado');
        next();
    } else {
        console.log('Logue para prosseguir');
        next();
    };
};

app.use(checkAuth);

app.use('/users', users);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
});
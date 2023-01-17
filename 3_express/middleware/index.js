const express = require("express");
const app = express();


const path = require("path");

const basePath = path.join(__dirname, 'templates');

const port = 3000;

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

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
})
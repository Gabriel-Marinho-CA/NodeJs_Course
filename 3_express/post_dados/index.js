const express = require("express");
const app = express();


const path = require("path");

const basePath = path.join(__dirname, 'templates');

const port = 3000;

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


app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    console.log(`Nome ${name} idade: ${age}`);
    res.sendFile(`${basePath}/userForm.html`)

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    console.log(`Buscando pelo user : ${id}`);

    res.sendFile(`${basePath}/user.html`);
});


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
});
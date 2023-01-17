const express = require("express");
const app = express();
const path = require("path");

const baseUrl = path.join(__dirname, 'templates');
const port = 3000;


// Arquivos estaticos

app.use(express.static('static'));

app.listen(port, (req, res) => {
    console.log(`Porta rodando ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(`${baseUrl}/index.html`);
})
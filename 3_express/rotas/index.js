const express = require("express");
const app = express();


const path = require("path");

const basePath = path.join(__dirname, 'templates');

const port = 3000;

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
})
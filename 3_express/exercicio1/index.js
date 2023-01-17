const express = require("express");
const app = express();
const path = require("path");


const port = 5000;
const basePath = path.join(__dirname,'templates');
const pdp = require('./pdp');

app.use(express.static('static'));


app.use('/pdp',pdp);


app.get('/', function(req,res) {
    res.sendFile(`${basePath}/index.html`);
});

app.use((req,res,next) => {
    res.status(404)
        .sendFile(`${basePath}/404.html`);
})

app.listen(port, (req,res) => {
    console.log(`Server rodando na porta ${port}`);
});
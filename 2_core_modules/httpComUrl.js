const http = require("http");
const url = require("url");

const port = 3000;


const server = http.createServer((req, res) => {

    const urlInfo = require("url").parse(req.url, true);
    const nameUrl = urlInfo.query.name;

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');

    if (!nameUrl) {
        res.end('<h1>Preecha o seu nome:<form method="GET"><input type="text" name="name" id=""><input type="submit" value="Enviar"></form></h1>')
    } else {
        res.end(`<h1> Seja bem vindo ${nameUrl} </h1>`)
    }

});
server.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})
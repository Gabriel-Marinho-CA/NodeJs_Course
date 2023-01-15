const fs = require("fs");
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name;

    if (!name) {
        fs.readFile('escrevendoHTML.html', function (err, data) {
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.write(data);
            return res.end();
        })
    } else {
        fs.writeFile("arquivo.txt",name,function(err,data) {
            res.writeHead(302, {
                Location: '/',
            })
            return res.end();
        })
    }



});
server.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
})
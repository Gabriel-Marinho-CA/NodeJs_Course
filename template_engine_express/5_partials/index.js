const express = require("express");
const exphbs = require("express-handlebars");
const {
    restart
} = require("nodemon");

const app = express();


const hbs = exphbs.create({
    partialsDir: ['views/partials']
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {

    const user = {
        name: 'Gabriel',
        surname: 'Marinho'
    }
    const idade = 30;

    const auth = true;


    res.render('home', {
        user: user,
        idade,
        auth
    });
});

app.get('/dashboard', (req, res) => {


    const items = ["item a ", "item b", "item c"]

    res.render('dashboard', {
        items
    });
});


app.get('/blog', (req,res) => {
    const posts = [
        {
            title: 'Aprendendo nodejs',
            category: 'JS',
            body:' Este artigo vai te ajudar a ...',
            comments: 4
        },
        {
            title: 'Aprendendo php',
            category: 'PHP',
            body:' Este artigo vai te ajudar a ...',
            comments: 54
        },
        {
            title: 'Aprendendo python',
            category: 'PY',
            body:' Este artigo vai te ajudar a ...',
            comments: 60
        },
    ];

    res.render('blog', {
        posts
    })
})

app.get("/post", (req,res) => {

    const post = {
        title: 'Aprendendo nodejs',
        category: 'JS',
        body:' Este artigo vai te ajudar a ...',
        comments: 4
    }  

    res.render('blogPost', {
        post
    })
})

app.listen(3000, (req, res) => {
    console.log('Rodando na porta 3000');
})
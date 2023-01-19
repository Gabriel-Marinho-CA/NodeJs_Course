const express = require('express');
const handlebars = require('express-handlebars');

const partialsHandlebars = handlebars.create({
    partialsDir: ['views/partials']
})

const app = express();


app.engine('handlebars', partialsHandlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(
    express.urlencoded({
        extended: true
    })
);


const products = [
    {
        id:1,
        name:"Enxada",
        price:99.50,
        rate: 5,
        imgUrl:"https://zeusdobrasil.com.br/arquivos/produtos/imagens_adicionais/enxada-antifaiscante_1059.jpeg",
        url:'/product/1'
    },
    {
        id:2,
        name:"Pá",
        price:199.99,
        rate: 3,
        imgUrl:"https://images.tcdn.com.br/img/img_prod/828968/pa_bico_c_cabo_n_4_3599_1_a26bfbc963e7163a000ae4d71907e6ad.png",
        url:'/product/2'
    },
    {
        id:3,
        name:"Foice",
        price:60,
        rate: 2,
        imgUrl:"https://www.lcferragens.com.br/wp-content/uploads/3749_foice_tramontina_pasto_trigo_comcabo.jpg",
        url:'/product/3'
    },
];

app.get('/', (req, res) => {

    res.render('home',{
        products
    })
});

app.get("/product/:id", (req,res) => {

    const id = req.params.id;

    const pdpObj = products.find(function(el) {
        return el.id == id;
    })

    res.render('productPage',{
        pdpObj
    });

})

app.listen(3000, () => {
    console.log(`Rodando porta 3000`);
})
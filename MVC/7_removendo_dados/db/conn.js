const {
    Sequelize
} = require("sequelize");


const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Conectado ao mysql \n');
} catch (e) {
    console.log("Não foi possivel conectar" + e);
};

module.exports = sequelize;
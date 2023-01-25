const {
    Sequelize
} = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {

    sequelize.authenticate();

    console.log('Conectado com sucesso');

} catch (error) {
    console.log('Nao foi possivel conectar', err);
};


module.exports = sequelize;
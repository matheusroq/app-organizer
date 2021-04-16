const Sequelize = require('sequelize');
const connection = require('./database');
const Task = require('./Task');

const Cadastro = connection.define('cadastro', {
    email : { type: Sequelize.STRING, allownull: false},
    senha: { type:  Sequelize.STRING, allownull: false }
});

Cadastro.sync({force: false}).then(() => {})

module.exports = Cadastro;

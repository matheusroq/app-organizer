const Sequelize = require('sequelize');
const connection = require('./database');
const Cadastro = require('./Cadastro');

const Task = connection.define('task', {
    title: {
        type: Sequelize.STRING,
        allownull: false
    },
    body: {
        type: Sequelize.STRING,
        allownull: false
    }
});


Cadastro.hasMany(Task);

Task.sync({force: false}).then(() => {})

module.exports = Task;
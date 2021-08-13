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
    },
    task_date: {
        type: Sequelize.DATEONLY,
        allownull: false
    },
    isComplete: {
        type: Sequelize.BOOLEAN,
        allownull: false,
        defaultValue: false,
    }
});


Cadastro.hasMany(Task);

Task.sync({alter: true}).then(() => {})

module.exports = Task;
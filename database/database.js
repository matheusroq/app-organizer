const Sequelize = require('sequelize');

const connection = new Sequelize('app_organizer', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;
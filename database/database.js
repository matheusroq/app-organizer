const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const connection = new Sequelize(process.env.DB, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;
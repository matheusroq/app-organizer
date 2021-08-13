const express = require('express');
const app = express();
const routes = require('./routes');

const { globalmiddleware } = require('./middlewares/middleware');

const connection = require('./database/database');
const session = require('express-session');
const flash = require('connect-flash');
const Sequelize = require('sequelize');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//database
connection 
.authenticate()
.then(() => {
    console.log('Conexão com o BD feita!');
})
.catch(e => {
    console.log(e);
}); 


app.use(express.urlencoded({extended: false}));
app.use(express.json());


//views
app.set('view engine', 'ejs');

//public
app.use(express.static('public'));

//sessão
const sequelize = new Sequelize('sessions', 'root', 'root', {
    dialect: 'sqlite',
    storage: './session.sqlite'
});
const myStore =  new SequelizeStore({
    db: sequelize
});
const sessionConfig = session({
    secret: 'wqrewrwty',
    resave: false,
    proxy: false,
    expiration: 24 * 60 * 60 * 1000 ,
    saveUninitialized: false,
    cookie: {  maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true}
});
app.use(sessionConfig);
myStore.sync({force: false});
app.use(flash())

//rotas
app.use(globalmiddleware);
app.use(routes);



app.listen(8080, () => {
    console.log('Rodando')
});
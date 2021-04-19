const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const cadastroController = require('./controllers/cadastroController');
const loginController = require('./controllers/loginController');
const tarefaController = require('./controllers/tarefaController');
const { loggedUser } = require('./middlewares/middleware');

//registro
route.get('/cadastro/index', cadastroController.index);
route.post('/cadastro/create', cadastroController.createAccount);

//login
route.get('/login', loginController.index);
route.post('/login', loginController.login);
route.get('/logout', loginController.logout);

//home
route.get('/', loggedUser, homeController.login);
route.get('/home', loggedUser, homeController.home);

//tarefas
route.get('/new', loggedUser, tarefaController.new);
route.post('/save', loggedUser, tarefaController.save);
route.post('/delete', loggedUser, tarefaController.delete);
route.get('/edit/:id', loggedUser, tarefaController.edit);
route.post('/tarefas/update', loggedUser, tarefaController.update);



module.exports = route;
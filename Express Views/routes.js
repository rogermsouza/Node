const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const sobreController = require('./src/controllers/sobreController');
const testeController = require('./src/controllers/testeController')

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato

route.get('/contato', contatoController.paginaInicial);
route.get('/sobre', sobreController.paginaInicial);
route.get('/teste', testeController.paginaInicial);

module.exports = route;
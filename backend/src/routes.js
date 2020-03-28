const express = require('express');

const ONG_controller = require('./controllers/ONG_controller');

const routes = express.Router();

/**
 * Métodos HTTP:
 * 
 * get -> buscar/listar uma informação do backend
 * post -> criar uma informação no backend
 * put -> alterar uma informação no backend
 * delete -> deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params -> parâmetros nomeados enviados na rota após o '?' geralmente serve para filtros /user?name=Naomi -> const params = request.query;
 * Route Params -> parâmetros utilizados para identificar recursos 'ids' exemplo:/users/:id
 * Request body -> o corpo da requisição, utilizado para criar ou alterar recursos -> const body = request.body;
 * 
 */

routes.get('/ongs', ONG_controller.index);


//Asyc indica que a função é assincrona
routes.post('/ongs', ONG_controller.create);
// a função () recebe dois parâmetros a requisão e a resposta

/**
 * Request: guarda todos os dados que vem da requisição do usuário, é possível acessar dados e parâmetros usando o request
 * Response: retorna os dados da resposta para o usuário
 */

 module.exports = routes; //Exporta um variável dentro de um arquivo
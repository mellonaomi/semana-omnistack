//importar algo para o node 
const express = require('express'); // a variável express contém todas as funcionalidades do módulo express

const routes = require('./routes'); //Importando o arquivo de rotas para index

const app = express(); //variável para instanciar a aplicação

app.use(express.json()); //Converte o json recebido em objeto js para a aplicação
app.use(routes); // usando o arquivo de rotas

app.listen(3333); //A aplicação vai rodar na porta local 3333
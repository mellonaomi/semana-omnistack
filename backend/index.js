//importar algo para o node 
const express = require('express'); // a variável express contém todas as funcionalidades do módulo express

const app = express(); //variável para instanciar a aplicação

app.get('/', (request, response) => { // '/' é a rota raíz se quiser criar uma rota é /nome-da-rota
	return response.json({ // retornando um objeto no formato json
		evento: 'Semana Omnistack 11.0',
		aluno: 'Naomi Mello'
	})
}); 
// a função () recebe dois parâmetros a requisão e a resposta

app.listen(3333); //A aplicação vai rodar na porta local 3333
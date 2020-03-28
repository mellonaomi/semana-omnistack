const connection = require('../database/connections');
const crypto = require('crypto'); //módulo para gerar caracteres aleatórios

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, state} = request.body;
	
	const id = crypto.randomBytes(4).toString('HEX');

	await connection('ongs').insert({ // await - espera a execução da query para retornar uma resposta
		id,
		name,
		email,
		whatsapp,
		city,
		state,
	})

	// retorna um objeto no formato json
	return response.json({ id });
    }
};

exports.up = function(knex) { // método responsável por criar a tabela
  return knex.schema.createTable('ongs', function(table){
	table.string('id').primary();
	table.string('name').notNullable();
	table.string('email').notNullable();
	table.string('whatsapp').notNullable();
	table.string('city').notNullable();
	table.string('state', 2).notNullable();
  });
};

exports.down = function(knex) {// deleta/desfaz tabelas
  return knex.schema.dropTable('ongs');
};


exports.up = function(knex) { // método responsável por criar a tabela
    return knex.schema.createTable('incidents', function(table){
      table.increments();

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('value').notNullable();

      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  exports.down = function(knex) {// deleta/desfaz tabelas
    return knex.schema.dropTable('incidents');
  };
  
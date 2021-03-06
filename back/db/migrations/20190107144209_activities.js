
exports.up = function(knex, Promise) {
  return knex.schema.createTable("activities", (table) => {
    table.increments();
    table.integer("trip_id")
      .references('id')
      .inTable('trips')
      .notNullable()
      .onDelete('CASCADE');
    table.string('name');
    table.string('type');
    table.string('start');
    table.string('end').defaultTo("");
    table.string('address').defaultTo("");
    table.integer('price').defaultTo(0);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("activities");
};

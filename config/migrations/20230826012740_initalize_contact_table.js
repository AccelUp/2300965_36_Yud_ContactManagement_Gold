/**
 * @param { import("knex").Knex }
 * @returns {Promise<void>}
 */

export const up = (knex) => {
  return knex.schema
    .createTable("companies", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.timestamps(true, true);
    })
    .createTable("categories", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    })
    .createTable("contacts", (table) => {
      table.increments("id").primary();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("email").unique();
      table.string("phone");
      table.integer("company_id").unsigned();
      table.foreign("company_id").references("companies.id");
      table.timestamps(true, true);
    })
    .createTable("contact_categories", (table) => {
      table.increments("id").primary();
      table.integer("contact_id").unsigned();
      table.foreign("contact_id").references("contacts.id");
      table.integer("category_id").unsigned();
      table.foreign("category_id").references("categories.id");
      table.timestamps(true, true);
    });
};

export const down = (knex) => {
  return knex.schema
    .dropTable("contact_categories")
    .dropTable("contacts")
    .dropTable("categories")
    .dropTable("companies");
};

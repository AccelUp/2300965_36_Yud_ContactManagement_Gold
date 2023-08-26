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

// export const up = async (knex) => {
//   await knex.schema.createTable("contact", (table) => {
//     table.uuid("id");
//     table.string("first_name").nullable();
//     table.string("last_name").nullable();
//     table.string("username").notNullable();
//     table.string("phone").notNullable();
//     table.string("email").notNullable();
//   });
// };

// /**
//  * @param { import("knex").Knex }
//  * @returns {Promise<void>}
//  */
// export const down = async (knex) => {
//   await knex.schema.dropTableIfExists("contact");
// };

import { v4 as uuidv4 } from "uuid";

export const up = async (knex) => {
  await knex.schema.createTable("contacts", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").unique();
    table.string("phone");
    table.uuid("company_id").unsigned();
    table.foreign("company_id").references("companies.id");
    table.timestamps(true, true);
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable("contacts");
};

import { v4 as uuidv4 } from "uuid";

export const up = async (knex) => {
  await knex.schema.createTable("contact_categories", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("contact_id").unsigned();
    table.foreign("contact_id").references("contacts.id");
    table.uuid("category_id").unsigned();
    table.foreign("category_id").references("categories.id");
    table.timestamps(true, true);
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable("contact_categories");
};

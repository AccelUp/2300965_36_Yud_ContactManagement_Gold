import { v4 as uuidv4 } from "uuid";

export const up = async (knex) => {
  await knex.schema.createTable("companies", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("name").notNullable();
    table.timestamps(true, true);
  });
};

export const down = async (knex) => {
  await knex.schema.dropTable("companies");
};

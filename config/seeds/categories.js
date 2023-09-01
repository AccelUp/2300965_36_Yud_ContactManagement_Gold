import { v4 as uuidv4 } from "uuid";

const categories = [
  { id: uuidv4(), name: "Category A" },
  { id: uuidv4(), name: "Category B" },
  { id: uuidv4(), name: "Category C" },
  { id: uuidv4(), name: "Category D" },
  { id: uuidv4(), name: "Category E" },
];

export const seed = async (knex) => {
  await knex("categories").del();
  await knex("categories").insert(categories);
};

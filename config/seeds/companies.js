import { v4 as uuidv4 } from "uuid";

const companies = [
  { id: uuidv4(), name: "ABC Inc." },
  { id: uuidv4(), name: "XYZ Ltd." },
  { id: uuidv4(), name: "Sample Corp" },
  { id: uuidv4(), name: "Tech Solutions LLC" },
  { id: uuidv4(), name: "Global Enterprises" },
];

export const seed = async (knex) => {
  await knex("companies").del();
  await knex("companies").insert(companies);
};

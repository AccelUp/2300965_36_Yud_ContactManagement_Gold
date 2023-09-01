import { v4 as uuidv4 } from "uuid";
// Import the 'companies' array from where it is defined
import { companies } from "./companies";

const contacts = [
  {
    id: uuidv4(),
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    company_id: companies[0].id,
  },
  {
    id: uuidv4(),
    first_name: "Jane",
    last_name: "Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    company_id: companies[1].id,
  },
  {
    id: uuidv4(),
    first_name: "Alice",
    last_name: "Johnson",
    email: "alice@example.com",
    phone: "555-555-5555",
    company_id: companies[2].id,
  },
  {
    id: uuidv4(),
    first_name: "Bob",
    last_name: "Brown",
    email: "bob@example.com",
    phone: "777-777-7777",
    company_id: companies[3].id,
  },
  {
    id: uuidv4(),
    first_name: "Eve",
    last_name: "Williams",
    email: "eve@example.com",
    phone: "999-999-9999",
    company_id: companies[4].id,
  },
];

export const seed = async (knex) => {
  await knex("contacts").del();
  await knex("contacts").insert(contacts);
};

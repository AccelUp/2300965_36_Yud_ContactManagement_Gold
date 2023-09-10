import { v4 as uuidv4 } from "uuid";
// Import the 'companies' array from where it is defined

const contacts = [
  {
    id: uuidv4(),
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    phone: "1234567890",
  },
  {
    id: uuidv4(),
    first_name: "Jane",
    last_name: "Smith",
    email: "jane@example.com",
    phone: "9876543210",
  },
  {
    id: uuidv4(),
    first_name: "Alice",
    last_name: "Johnson",
    email: "alice@example.com",
    phone: "5555555555",
  },
  {
    id: uuidv4(),
    first_name: "Bob",
    last_name: "Brown",
    email: "bob@example.com",
    phone: "7777777777",
  },
  {
    id: uuidv4(),
    first_name: "Eve",
    last_name: "Williams",
    email: "eve@example.com",
    phone: "9999999999",
  },
];

export const seed = async (knex) => {
  await knex("contacts").del();
  await knex("contacts").insert(contacts);
};

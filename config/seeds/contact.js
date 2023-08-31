// seeds/initial_data.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("contact_categories").del();
  await knex("contacts").del();
  await knex("categories").del();
  await knex("companies").del();

  // Inserts seed entries
  await knex("companies").insert([
    { name: "Company A" },
    { name: "Company B" },
    { name: "Company C" },
  ]);

  await knex("categories").insert([
    { name: "Category X" },
    { name: "Category Y" },
    { name: "Category Z" },
  ]);

  await knex("contacts").insert([
    {
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      phone: "1234567890",
      company_id: 1,
    },
    {
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      phone: "9876543210",
      company_id: 2,
    },
    // ... Add more contact data here
  ]);

  await knex("contact_categories").insert([
    { contact_id: 1, category_id: 1 },
    { contact_id: 1, category_id: 2 },
    // ... Add more contact-category associations here
  ]);
};

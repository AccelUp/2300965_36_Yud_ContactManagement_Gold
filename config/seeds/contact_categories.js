import { v4 as uuidv4 } from "uuid";

const contactCategories = [
  {
    id: uuidv4(),
    contact_id: contacts[0].id,
    category_id: categories[0].id,
  },
  {
    id: uuidv4(),
    contact_id: contacts[0].id,
    category_id: categories[1].id,
  },
  {
    id: uuidv4(),
    contact_id: contacts[1].id,
    category_id: categories[1].id,
  },
  {
    id: uuidv4(),
    contact_id: contacts[2].id,
    category_id: categories[2].id,
  },
  {
    id: uuidv4(),
    contact_id: contacts[3].id,
    category_id: categories[3].id,
  },
];

export const seed = async (knex) => {
  await knex("contact_categories").del();
  await knex("contact_categories").insert(contactCategories);
};

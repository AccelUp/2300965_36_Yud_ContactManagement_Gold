import { v4 } from "uuid";
import db from "../config/db.js"; // Correct import path

const loadContact = async () => {
  return await db.select("*").from("contacts");
};

const newContact = async (first_name, last_name, email, phone, company_id) => {
  const cont = {
    id: v4(),
    first_name,
    last_name,
    email,
    phone,
    company_id,
  };
  await db("contacts").insert(cont);
  return cont;
};

export { loadContact, newContact };

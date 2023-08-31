import { v4 } from "uuid";
import db from "../config/db.js"; // Correct import path

const loadContact = async () => {
  return await db.select("*").from("contacts");
};

const newContact = async (contact) => {
  return await db("contacts").insert(contact);
};

export { loadContact, newContact };

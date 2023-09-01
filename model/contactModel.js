import { v4 } from "uuid";
import db from "../config/db.js"; // Correct import path

const loadContact = async () => {
  return await db.select("*").from("contacts");
};

const newContact = async (contact) => {
  return await db("contacts").insert(contact);
};

const editContact = async (id, updatedContact) => {
  await db("contacts").where("id", id).update(updatedContact);
};

const removeContact = async (id) => {
  const contact = loadContact();
  await db("contacts").where("id", id).del();
};

const getByID = async (id) => {
  return await db("contacts").where("id", id).first();
};

export { loadContact, newContact, editContact, removeContact, getByID };

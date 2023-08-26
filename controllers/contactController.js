import { v4 } from "uuid";;

let contactInfo = {};

const getContact = (req, res) => {
  res.json(contactInfo);
};

const addContact = (req, res) => {
  const contact = req.body;
  contactInfo.push({ ...contact, id: v4() });
  res.send(`contact "${contact.name}" has been added successfully.`);
};

const getContactId = (req, res) => {
  const { id } = req.params;
  const itemFound = itemData.find((item) => item.id === id);
  console.log(itemFound);
  res.send(itemFound);
};

const deleteContact = (req, res) => {
  const { id } = req.params;
  itemData = itemData.filter((item) => item.id !== id);
  console.log(itemData);
  res.send(`Item with id ${id} has been deleted successfully.`);
};

const updateContact = (req, res) => {
  const { id } = req.params;
  const { name, toppings, price } = req.body;

  const item = itemData.find((item) => item.id === id);

  if (name) item.name = name;
  if (toppings) item.toppings = toppings;
  if (price) item.price = price;

  res.send(
    `Item with id ${id} and name ${item.name} has been updated successfully`
  );
};

export { getContact, addContact, getContactId, deleteContact, updateContact };

import { v4 } from "uuid";
import {
  loadContact,
  newContact,
  editContact,
  removeContact,
  getByID,
} from "../model/contactModel.js"; // Correct import path
import * as helper from "../middleware/handler.js";

const getContact = async (req, res) => {
  try {
    const contact = await loadContact();
    return res
      .status(200)
      .json(helper.responseOk("Succesfully fetching all contacts", contact));
  } catch (e) {
    console.error("Error fetching all contacts: ", e);
    return res.status(500).json(helper.responseError);
  }
};

const addContact = async (req, res) => {
  try {
    await newContact(req.body);
    return res
      .status(201)
      .json(helper.responseOk("Contact succesfully created"));
  } catch (e) {
    console.error("Error creating contact: ", e);
    return res.status(500).json(helper.responseError(e));
  }
};

const updateContact = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updated = await editContact(id, body); // Call the upContact function
    return res
      .status(200)
      .json(helper.responseOk("Contact successfully updated ", updated));
  } catch (e) {
    console.error("Error updating contact: ", e);
    return res.status(500).json(helper.responseError(e));
  }
};

const deleteContact = async (req, res) => {
  const id = req.params.id;
  try {
    await removeContact(id);
    return res
      .status(200)
      .json(helper.responseOk("Contact succesfully deleted"));
  } catch (e) {
    console.error("Error deleting contact: ");
    return res.status(500).json(helper.responseError(e));
  }
};

const getContactId = async (req, res) => {
  const id = req.params.id;
  try {
    const contact = await getByID(id);
    if (!contact) {
      return res.status(404).json(helper.responseError("Contact not found"));
    }
    return res
      .status(200)
      .json(helper.responseOk("Contact retrieved succesfully", contact));
  } catch (e) {
    console.error("Error retrieving  contacts: ", e);
    return res.status(500).json(helper.responseError);
  }
};
export { getContact, addContact, updateContact, deleteContact, getContactId };

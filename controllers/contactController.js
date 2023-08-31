import { v4 } from "uuid";
import { loadContact, newContact } from "../model/contactModel.js"; // Correct import path
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
    await addContact(req.body);
    return res
      .status(201)
      .json(helper.responseOk("Contact succesfully created"));
  } catch (e) {
    console.error("Error creating contact", e);
    return res.status(500).json(helper.responseError(e));
  }
};

export { getContact, addContact };

import express from "express";
const router = express.Router();

import {
  getContact,
  addContact,
  updateContact,
  deleteContact,
  getContactId,
} from "../../controllers/contactController.js";

router.get("/", getContact);
router.post("/", addContact);

router.put("/:id", updateContact);
router.delete("/:id", deleteContact);
router.get("/:id", getContactId);

export default router;

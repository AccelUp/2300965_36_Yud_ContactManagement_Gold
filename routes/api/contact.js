import express from "express";
const router = express.Router();

import {
  getContact,
  addContact,
  // deleteContact,
  // getContactId,
  // updateContact,
} from "../../controllers/contactController.js";

router.get("/", getContact);
router.post("/", addContact);

// router.get("/:id", getContactId);
// router.delete("/:id", deleteContact);
// router.put("/:id", updateContact);

export default router;

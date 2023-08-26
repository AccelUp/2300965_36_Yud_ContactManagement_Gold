import { v4 } from "uuid";
import db from "../config/db.js";

class contactModel {
  tableName = "model";
  constructor() {}
  async getAll() {
    return await db(this.tableName).select("*");
  }

  async create({ title, content, author }) {
    const newContact = {
      id: v4(),
      title,
      content,
      author,
    };
    await db(this.tableName).insert(newContact);
    return newContact;
  }
}

export default contactModel;

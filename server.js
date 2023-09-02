import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Routes
import contactRoutes from "./routes/api/contact.js";

app.use("/contact", contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

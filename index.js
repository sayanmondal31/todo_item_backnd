const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectWithDb = require("./db/db");
require("dotenv").config();

connectWithDb()
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// Routes
app.use("/Items", require("./router/item"));

// Start server
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

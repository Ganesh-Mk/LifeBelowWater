const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/UserModel");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

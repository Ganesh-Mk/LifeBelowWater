const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const UserModel = require("./models/userModel");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

mongoose
  .connect("mongodb://localhost:27017/WaterDB")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB not connected: " + err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/allUserDetails", (req, res) => {
  UserModel.find()
    .then((userModel) => res.send(userModel))
    .catch((err) => res.send(err));
});

app.post("/login", (req, res) => {
  console.log(req.body);
  UserModel.findOne({
    email: req.body.userEmail,
    password: req.body.userPassword,
  })
    .then((userModel) => {
      if (userModel) {
        res.send(userModel);
      } else {
        res.send(false);
      }
    })
    .catch((err) => res.send(err));
});

app.post("/signup", (req, res) => {
  UserModel.create({
    name: req.body.userName,
    email: req.body.userEmail,
    password: req.body.userPassword,
  })
    .then((userModel) => res.send(userModel))
    .catch((err) => res.send(err));
});

PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});

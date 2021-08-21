const dotenv = require("dotenv");
const mongoose = require("mongoose");
var express = require("express");
var app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");
const User = require("./model/userSchema");

const port = process.env.PORT;

//Midleware

const middleware = (req, res, next) => {
  console.log("IN Middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("<br>Epress - js");
});

app.get("/login", (req, res) => {
  res.send("<br>LOGIN");
});

app.get("/signup", (req, res) => {
  res.send("<br>SIGNUP");
});

app.get("/datasrc", (req, res) => {
  res.send("<br>DATA SOURCE");
});

app.get("/bots", (req, res) => {
  res.send("<br>BOTS");
});

app.listen({ port });

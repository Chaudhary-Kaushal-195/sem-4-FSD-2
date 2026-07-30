const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public", { index: "p1.html" }));

app.get("/gohome", (req, res) => {
  res.redirect("home.html");
});

app.get("/goback", (req, res) => {
  res.redirect("p1.html");
});

app.get("/form", (req, res) => {
  res.redirect("form.html");
});

app.set("view engine", "ejs");

app.post("/data", (req, res) => {
  console.log(req.body);
  res.render("details", { data: req.body });
});

app.listen(3002, () => console.log("http://localhost:3002"));

//server.js
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true })); //to parse form POST data
app.use(express.static("public")); //serve login.html from /public
//Custom middleware—must run BEFOR the /check route
app.use((req, res, next) => {
  if (req.method === "POST" && req.path === "/check") {
    //this runs before the route handler
  }
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/check", (req, res) => {
  const { username } = req.body;
  if (username === "admin") {
    res.send("welcome...admin");
  } else if (!username) {
    res.status(400).send("Pagenotfound");
  } else {
    res.send("welcome msg");
    console.log("warning msg"); //logged in red on server console
  }
});
app.listen(3000, () => console.log("http://localhost:3000"));

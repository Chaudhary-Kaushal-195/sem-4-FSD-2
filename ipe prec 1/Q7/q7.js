const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

app.post("/feedback", (req, res) => {
  const { name, email, message, rating } = req.body;
  //Store feed back data in a cookie , expiring in 10 minutes
  res.cookie("feedback", JSON.stringify({ name, email, message, rating }), {
    maxAge: 10 * 60 * 1000, // 10 minutes in ms
  });
  res.send(`
    Thank you for your feedback!
    <br><a href="/view-feedback">View submitted feedback</a>
    `);
});

app.get("/view-feedback", (req, res) => {
  if (req.cookies.feedback) {
    console.log("Feedback cookie found:", req.cookies.feedback);
    const data = JSON.parse(req.cookies.feedback);
    res.send(`
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Message: ${data.message}</p>
            <p>Rating: ${data.rating}</p>
            <a href="/logout">Logout</a>
            `);
  } else {
    res.status(404).send("Page not found");
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("feedback");
  res.redirect("/view-feedback"); // will now show "Page not found"
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/feedback.html");
});

app.listen(3000, () =>{ console.log("http://localhost:3000")});

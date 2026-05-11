// create a user signup form using Express.js and cookies. Implement the following
// requirements:
// Create a form with the following fields:
// o Name (input field)
// o Email (input field)
// o Gender (radio buttons: Male, Female, Others)
// o Submit button
// When the user submits the form, store their information (name, email, gender) in a
// cookie named "registered" that expires in 15 seconds.
// Display a confirmation message to the user after successfully submitting the form &
// Create a link to display the details stored in the "registered" cookie.
// When the user clicks to the link, retrieve the information from the cookie and display
// it on the /details page also include a link on the /details page to Logout. When the
// user clicks the link, user redirected to home page.
// Use post method.
var express = require("express");
var cp = require("cookie-parser");
var app = express();
app.use(cp());
app.use(express.urlencoded());
app.use(express.static("./", { index: "pb208.html" }));
app.post("/data3", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var gender = req.body.gender;
  res.cookie("registered", { name, email, gender }, { maxAge: 15000 });
  res.send(`<h3>Registration SuccessFull </h2>
            <h4>Name : ${name}</h4>
            <h4>Email : ${email}</h4>
            <h4>Gender : ${gender}</h4>
        <a href="/details">View Cookie Details</a
        `);
});
app.get("/details", (req, res) => {
  var data = req.cookies.registered;
  if (data) {
    res.send(`
            <h2>Stored Cookie Details</h2>

            <h4>Name : ${data.name}</h4>
            <h4>Email : ${data.email}</h4>
            <h4>Gender : ${data.gender}</h4>

            <a href="/logout">Logout</a>
        `);
  }
});
app.get("/logout", (req, res) => {
  res.redirect("/");
});
app.listen(5009, () => {
  console.log("Server running on http://localhost:5009");
});

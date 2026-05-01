// Task-2

// Write an Express.js application to perform the following tasks:

// 1) Create an EJS file named contact.ejs that displays a heading "Contact Form" and contains a form with:
//             	-Text input for Name
//             	-Email input for Email
//             	-Submit button
// 2) Render this EJS file on the /contact route.
// 3) Handle form submission using the POST method on the /submit route.
// 4) After form submission, display a message on the browser in the format:
// "Thank you (Name), we have received your email (Email)."

expr = require("express");
app = expr();
app.set("veiw engine", "ejs");
app.use(expr.urlencoded());
app.get("/", (req, res) => {
  res.render("contect.ejs");
});
app.post("/data", (req, res) => {
  fname = req.body.fname;
  email1 = req.body.email1;

  res.render("out.ejs", { fname, email1 });
});
app.listen(5335, () => {
  console.log("http://localhost:5335");
});

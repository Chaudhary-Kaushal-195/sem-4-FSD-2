// Task-3

// Develop a web application using Express and EJS to accept marks
// of four tests (T1, T2, T3, T4), each out of 25, through a form using the POST method.
// After submission, display all entered marks in a tabular format along with the total marks,
//  and determine the result: if the total is 35 or more, display “Pass” in green color; otherwise,
//  display “Fail” in red color.

expr = require("express");
app = expr();
app.set("veiw engine", "ejs");
app.use(expr.urlencoded());
app.get("/", (req, res) => {
  res.render("form.ejs");
});
app.post("/data", (req, res) => {
  fname = req.body.fname;
  mark1 = req.body.mark1;
  mark2 = req.body.mark2;
  mark3 = req.body.mark3;
  mark4 = req.body.mark4;
  total = parseInt(mark1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4);
  res.render("out.ejs", { fname, mark1, mark2, mark3, mark4, total });
});
app.listen(5334, () => {
  console.log("http://localhost:5334");
});

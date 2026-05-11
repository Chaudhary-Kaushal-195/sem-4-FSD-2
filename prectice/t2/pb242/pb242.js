// Write an Express.js code to send a mail. Create one html file which
// has one email field and one submit button. Fetch the email address
// from email field and send a mail to that email address.
// Mail subject should be “Exam Timetable”. Mail body contains “L J
// University” in h3 tag and  display data (Date 21/05/25, Exam name
// FSD-2) in table.
expr = require("express");
const nm = require("nodemailer");
var app = expr();
app.use(expr.static("./", { index: "pb242.html" }));
var trans = nm.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "kaushalchau.2007@gmail.com",
    pass: "iyjn nvyb lftp pqzg",
  },
});
app.get("/data2", (req, res) => {
  var em = req.query.email;
  res.send(em);

  var mailoption = {
    from: "kaushalchau.2007@gmail.com",
    to: em,
    subject: "Exam Timetable",
    html: `<h3>L J University</h3>
    <table border="2">
      <tr>
        <th>Date</th>
        <th>Exam Name</th>
      </tr>
      <tr>
        <td>21/05/25</td>
        <td>FSD-2</td>
      </tr>
    </table>`,
  };
  trans.sendMail(mailoption, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
});
app.listen(2345, () => {
  console.log("http://localhost:2345");
});

nm = require("nodemailer");
expr = require("express");
app = expr();
app.use(expr.static("./", { index: "t1.html" }));
app.get("/data", (req, res) => {
  var trans = nm.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "kaushalchau.2007@gmail.com",
      pass: "iyjn nvyb lftp pqzg",
    },
  });
  var mailoption = {
    from: "kaushalchau.2007@gmail.com",
    to: "chaudharykaushalrakeshbhai@gmail.com",
    subject: "This is mail",
    html: `<p>Thank you for ordering <h3 style:"color:red">Product Name :"${req.query.fname}"</h3> from our site </p><br>
    <h3 style:"color: red">Delivery date : ${req.query.date}</h3>`,
  };
  trans.sendMail(mailoption, (err, info) => {
    if (info) {
      res.send(`Mail send !!! `);
    } else {
      res.send(`mail sending fail`);
    }
  });
});
app.listen(5678, () => {
  console.log("http://localhost:5678");
});

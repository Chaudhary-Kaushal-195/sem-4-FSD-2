nm = require("nodemailer");
expr = require("express");
app = expr();
app.use(expr.static("../public", { index: "form.html" }));
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
    html: `<h1>Hello Html ${req.query.fname}</h1>`,
  };
  trans.sendMail(mailoption, (err, info) => {
    if (info) {
      res.send(`Mail send !!! `);
    } else {
      res.send(`mail sending fail`);
    }
  });
});
app.listen(5679, () => {
  console.log("http://localhost:5679");
});

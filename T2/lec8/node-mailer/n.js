nm = require("nodemailer");
expr = require("express");
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
  //   text: "jambo",
  html: "<h1>Hello Html</h1>",
  //   attachments: [{ filename: "a.png", path: "./.png" }],
};
trans.sendMail(mailoption, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});

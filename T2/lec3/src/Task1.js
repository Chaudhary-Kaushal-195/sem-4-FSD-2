// Write express JS script to load in html file* having username,
// password and submit button. On clicking of submit button,
// it should jump on check page using post method. Implement
// an authentication middleware that checks whether the entered username is
// "admin" and the password is "1234". If the credentials are correct, the
// application should display the message "Login Successful". For any other
// username it should stay on same middleware to print warning
// message in red color.

var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(`</h1>User form</h1>
        <form action='/data' method='get'> 
        Uname:<input type ='text' name='uname'><br><br>
        Passwork:<input type ='password' name='pass'><br><br>
        <button type="submit">submit</button>
        </form>`);
});
const a = (req, res, next) => {
  if (req.query.uname == "admin") {
    next();
  }
  res.send(
    `<p style="color:red">Warning!! <br> Invalid Username or Password !!</p>`,
  );
};
const b = (req, res, next) => {
  if (req.query.pass == "1234") {
    next();
  }
  res.send(
    `<p style="color:red">Warning!! <br> Invalid Username or Password !!</p>`,
  );
};
app.use("/data", a, b);

app.get("/data", (req, res) => {
  res.type("text/html");
  res.write(`<p style="color:green">Login Successful!</p>
    username =   ${req.query.uname}  <br> password =  ${req.query.pass}`);
  res.send();
});
app.listen(6008, () => {
  console.log("http://localhost:6008");
});

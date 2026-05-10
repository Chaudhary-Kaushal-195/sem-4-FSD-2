expr = require("express");
app = expr();
f = require("./api2.js");
app.use("/p", f);
app.listen(5224, () => {
  console.log(`Server running on :
    http://localhost:5224/p/m,
    http://localhost:5224/p/branch/CSE`);
});

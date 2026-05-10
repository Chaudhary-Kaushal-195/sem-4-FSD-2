const expr = require("express");
const app = expr();

app.use(expr.static("../public", { index: "server.html" }));
app.get("/data1", (req, res) => {
  if (req.query.formula === "addition" && req.query.n1 && req.query.n2) {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const sum = n1 + n2;
    res.send(`The sum of ${n1} and ${n2} is ${sum}`);
  }
  else if(req.query.formula === "subtraction" && req.query.n1 && req.query.n2) {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);      
    const difference = n1 - n2;
    res.send(`The difference of ${n1} and ${n2} is ${difference}`);
  }
  else if(req.query.formula === "multi" && req.query.n1 && req.query.n2) { 
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const product = n1 * n2;
    res.send(`The product of ${n1} and ${n2} is ${product}`);
    }
    else if(req.query.formula === "div" && req.query.n1 && req.query.n2) {
      const n1 = parseInt(req.query.n1);
      const n2 = parseInt(req.query.n2);
        if (n2 !== 0) {
            const quotient = n1 / n2;
            res.send(`The quotient of ${n1} and ${n2} is ${quotient}`);
        }
        else {
            res.send("Division by zero is not allowed");
        }
    }

   else {
    res.send("Please provide both n1 and n2 query parameters and a valid formula (addition, subtraction, multi, div)");
  }
});



app.listen(5672, () => {
  console.log("Server running on http://localhost:5672");
});

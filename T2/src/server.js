const expr = require("express");
const app = expr();

app.use(expr.static('../public',{index:'form.html'}));

app.listen(5672, () => {
    console.log("Server running on http://localhost:5672");
});
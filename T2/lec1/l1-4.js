var express = require("express");
var app = express();

app.get('/flights/:from/:to', (req, res) => {
    res.send(req.params);
});

app.listen(5008, () => {
    console.log("http://localhost:5008/flights/india/usa");
});
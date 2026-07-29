const express = require("express");
const app = express();
const places = [
  {
    name: "PlaceA",
    country: "India",
    state: "Gujarat",
    city: "Ahmedabad",
    rating: 10,
  },
  {
    name: "PlaceB",
    country: "India",
    state: "Gujarat",
    city: "Surat",
    rating: 7,
  },
  {
    name: "PlaceC",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    rating: 10,
  },
  //...more objects
];
app.get("/places", (req, res) => {
  const minRating = parseFloat(req.query.rating);
  const filtered = minRating
    ? places.filter((p) => p.rating >= minRating)
    : places;
  res.json(filtered);
});
app.listen(3001, () => console.log("http://localhost:3001"));

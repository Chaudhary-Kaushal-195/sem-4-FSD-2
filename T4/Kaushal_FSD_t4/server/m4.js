import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/hi")
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.error(err);
  });

// create schema
const myschema = new mongoose.Schema({
  name: String,
  age: Number,
  status: Boolean,
});

mongoose.pluralize(null);
// create Model
const person = mongoose.model("person1", myschema);

// save data
const createDoc = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const pdata = [
      { name: "xyz", age: 20 },
      { name: "pgr", age: 100 },
    ];

    // const result = await person.insertMany(pdata)
    // console.log(result)

    const result1 = await person.find({ name: "xyz" });
    console.log(result1);
  } catch (err) {
    console.error("problem", err);
  }
};
createDoc();

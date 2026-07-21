const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/company");

// Schema
const employeeSchema = new mongoose.Schema({
    ename: String,
    eid: Number,
    salary: Number,
    dept: String
});

const Employee = mongoose.model("employees", employeeSchema);

app.post("/data", async (req, res) => {
    const emp = new Employee(req.body);
    await emp.save();
    res.send("Employee Saved");
});

app.get("/data", async (req, res) => {
    const data = await Employee.find();
    res.json(data);
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});
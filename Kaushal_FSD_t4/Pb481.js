const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/mdb2");

const courseSchema = new mongoose.Schema({
    sname: String,
    cname: String,
    email: String
});

const Course = mongoose.model("enrollments", courseSchema);

app.post("/data", async (req, res) => {

    const { sname, cname } = req.body;
    const check = await Course.findOne({ sname, cname });

    if (check) {
        return res.send("Student already enrolled in this course");
    }

    const data = new Course(req.body);
    await data.save();

    res.send("Enrollment Successful");
});

app.listen(5000, () => {
    console.log("Server Running...");
});
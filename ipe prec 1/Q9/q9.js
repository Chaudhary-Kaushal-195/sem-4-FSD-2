const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public", { index: "q9.html" }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "IMAGES"),
  filename: (req, file, cb) => cb(null, file.originalname),
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post("/upload", upload.single("mypic"), (req, res) => {
  if (!req.file) return res.status(400).send("No valid image uploaded");

  res.send(`Fileuploaded: ${req.file.filename}`);
});

app.listen(3003, () => console.log("http://localhost:3003"));

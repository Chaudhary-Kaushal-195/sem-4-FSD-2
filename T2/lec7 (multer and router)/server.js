const multer = require("multer");
expr = require("express");
app = expr();
app.use(expr.static("./"));
storage = multer.diskStorage({
  destination: "Hello",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

upload = multer({ storage, limits: { fileSize: 1024 } });
app.post("/data", upload.single("mypic"), (req, res) => {
  file = req.file;
  if (file) {
    res.send(`file upload ${file.originalname} done`);
  } else {
    res.send("not uploded");
  }
});

app.listen(5230, () => {
  console.log("Server running on http://localhost:5230");
});

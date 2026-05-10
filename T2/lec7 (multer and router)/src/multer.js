const multer = require("multer");
expr = require("express");
app = expr();
app.use(expr.static("../public", { index: "multer.html" }));
storage = multer.diskStorage({
  destination: "Hello",
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
    console.log(file);
  },
});

upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });
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

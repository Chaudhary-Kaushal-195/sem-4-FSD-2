const expr = require("express");
const app = expr();
const student = [
  { name: "ABC", age: 28 },
  { name: "PQR", age: 31 },
  { name: "XYZ", age: 20 },
];
app.get("/", (req, res) => {
  res.set("content-type", "text/html");
  for (x = 0; x < student.length; x++) {
    for (j = x + 1; j < student.length; j++) {
      if (student[x].age > student[j].age) {
        temp = student[x].age;
        student[x].age = student[j].age;
        student[j].age = temp;
      }
    }
  }
  for (i = 0; i < student.length; i++) {
    res.write(student[i].name + "\t" + student[i].age + "<br>");
  }
  res.send();
});
app.listen(6001, () => {
  console.log("http://localhost:6001");
});

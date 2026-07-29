const fs = require("fs");
fs.writeFile("help.txt", "Youarecreating afile", (err) => {
  if (err) throw err;
  console.log("File writtensuccessfully");
  fs.appendFile("help.txt", " you are appendingdata", (err) => {
    if (err) throw err;
    console.log("Dataappended successfully");
    fs.readFile("help.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("File Content:", data);
      console.log("Thanks for usingmyprogram");
    });
  });
});

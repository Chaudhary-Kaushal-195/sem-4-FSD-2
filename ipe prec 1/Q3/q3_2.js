const fs = require("fs/promises");
async function run() {
  await fs.writeFile("help.txt", "Youarecreatingafile");
  await fs.appendFile("help.txt", " you areappendingdata");
  const data = await fs.readFile("help.txt", "utf8");
  console.log("File Content:", data);
  console.log("Thanksforusing myprogram");
}
run();

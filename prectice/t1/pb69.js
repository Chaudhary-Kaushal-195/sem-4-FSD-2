var fs = require("fs")
fs.writeFileSync("source.txt","hello world")
fs.copyFileSync("source.txt","destination.txt")

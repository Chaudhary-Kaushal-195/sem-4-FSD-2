const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/exam") {
    //Extract c1, c2, c3 and write formatted content to exam.txt
    const content = `${query.c1}!\n${query.c2.replace(/\+/g, "")}`;
    fs.writeFile("exam.txt", content, (err) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error writing file");
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(content);
    });
  } else if (pathname === "/") {
    //Homepagewithlinks usingbold style-namesyntax
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>WelcometoHome Page</h1>
            <a href="/about-us"><b>About Us</b></a><br>
            <a href="/contact-us"><b>ContactUs</b></a>
            `);
  } else if (pathname === "/about-us") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>WelcometoLJ University</h1>");
  } else if (pathname === "/contact-us") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<i>Email:abc@ljinstitutes.edu.in</i>");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page notfound");
  }
});
server.listen(3000, () => console.log("http://localhost:3000"));

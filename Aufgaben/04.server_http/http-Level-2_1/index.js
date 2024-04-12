import http from "http";
import readFileFunc from "./readfile.js";
import { readFileSync } from "fs";

const errorPage = readFileSync("./pages/error.html");

const server = http.createServer((request, response) => {
  console.log("new request:", request.method, request.url);

  const filePath =
    request.url === "/" || request.url === "/home"
      ? "pages/index.html"
      : request.url.slice(1);

  const sendFile = (path) => {
    readFileFunc(path)
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        response.writeHead(err, 404);
        response.end(errorPage);
      });
  };

  sendFile(filePath);
});

const PORT = 270;
server.listen(PORT, () => console.log("server ready at port", PORT));

import http from "http";
import readFileFunc from "./readfile.js";

const mediaArray = [".png", ".jpg", ".webp", ".svg", ".mp4"];

const server = http.createServer((request, response) => {
  console.log("new request:", request.method, request.url);

  const imgPath = request.url.slice(1);
  const filePath =
    request.url === "/" || request.url === "/home"
      ? "index.html"
      : `${request.url.slice(1)}.html`;

  if (mediaArray.some((test) => request.url.includes(test))) {
    readFileFunc(imgPath).then((dataBuffer) => {
      response.write(dataBuffer);
      response.end();
    });
  } else {
    if (
      request.method === "GET" &&
      (request.url === "/home" ||
        request.url === "/" ||
        request.url === "/about" ||
        request.url === "/contact" ||
        request.url === "/faq")
    ) {
      readFileFunc(`./pages/${filePath}`)
        .then((dataBuffer) => {
          response.write(dataBuffer);
          response.end();
        })
        .catch((err) => {
          console.log(err);
          response.end('<a href="/home">Home</a>');
        });
    } else if (request.url === "/styles") {
      readFileFunc("./css/style.css").then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      });
    } else {
      readFileFunc("./pages/error.html").then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      });
    }
  }
});

const PORT = 270;
server.listen(PORT, () => console.log("server ready at port", PORT));

import express from "express";
import url from "url";
import path from "path";

const _dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();

app.use((req, _, next) => {
  console.log("new request:", req.method, req.url);
  next();
});

app.use(express.static("public"));

app.get("/", (_, res) => {
  res.sendFile(_dirname + "/public/pages/index.html");
});

app.get("/home", (_, res) => {
  res.sendFile(_dirname + "/public/pages/index.html");
});
app.get("/about", (_, res) => {
  res.sendFile(_dirname + "/public/pages/about.html");
});
app.get("/work", (_, res) => {
  res.sendFile(_dirname + "/public/pages/work.html");
});
app.get("/gallery", (_, res) => {
  res.sendFile(_dirname + "/public/pages/galerie.html");
});

app.use((_, res) => {
  res.status(404).send("your request did not match any endpoint");
});

const PORT = 269;
app.listen(PORT, () => console.log("server ready at Port:", PORT));

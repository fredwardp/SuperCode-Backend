import express from "express";

const app = express();

// Das Konzept mit dem use heißt middleware und ist ein request handler, der nach einer Verarbeitung weiterleitet (next)
app.use((req, _, next) => {
  console.log("new request", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  console.log("new request:", req.method, req.url);
  res.send("Willkommen auf der Startseite");
});

app.get("/hallo", (req, res) => {
  console.log("new request:", req.method, req.url);
  res.send("Hallo Welt");
});

const PORT = 187;
app.listen(PORT, () => console.log("Server ready at", PORT));

import express from "express";
import morgan from "morgan";
import { moviesDAO } from "./db-access/moviesDAO.js";
import { ObjectId } from "mongodb";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/v1/movies", (req, res) => {
  moviesDAO
    .findAll()
    .then((movies) => res.json(movies).status(200))
    .catch((err) => {
      res.json({ message: "Could not load movies", err }).status(500);
    });
});

app.get("/api/v1/movies/:id", (req, res) => {
  const movieId = req.params.id;
  moviesDAO
    .findbyId(movieId)
    .then((movie) => res.json(movie).status(200))
    .catch((err) =>
      res.json({ message: "Internal Server Error", err }).status(500)
    );
});

app.post("/api/v1/movies", (req, res) => {
  const newData = req.body;
  moviesDAO
    .addOne(newData)
    .then((moviesUpd) => res.json(moviesUpd))
    .catch((err) =>
      res.json({ message: "Internal Server Error", err }).status(500)
    );
});

app.patch("/api/v1/movies/:id", (req, res) => {
  const movieId = req.params.id;
  const updMovieData = req.body;
  moviesDAO
    .editOne(movieId, updMovieData)
    .then((updatedMovie) => res.json(updatedMovie).status(200))
    .catch((err) => res.json({ message: "Internal Server error" }).status(500));
});

app.delete("/api/v1/movies/:id", (req, res) => {
  const movieId = req.params.id;
  moviesDAO
    .deleteOne(movieId)
    .then((deletedMovie) => res.json(deletedMovie).status(200))
    .catch((err) =>
      res.json({ message: "Internal Server error", err }).status(500)
    );
});

const PORT = 169;
app.listen(PORT, () => console.log("Server listening at Port:", PORT));

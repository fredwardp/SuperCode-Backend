import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

//Funktion um auf alle Filme zuzugreifen
const findAll = () => {
  return getDb().then((db) => db.collection("movieDetails").find().toArray());
};

const findbyId = (id) => {
  const movieIdFormatted = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("movieDetails").findOne({ _id: movieIdFormatted })
  );
};

const addOne = (movieData) => {
  return getDb()
    .then((db) => db.collection("movieDetails").insertOne(movieData))
    .then((result) =>
      result.acknowledged ? { ...movieData, _id: result.insertedId } : null
    );
};

const editOne = (id, movieData) => {
  const movieIdFormatted = ObjectId.createFromHexString(id);
  return getDb()
    .then((db) =>
      db
        .collection("movieDetails")
        .updateOne({ _id: movieIdFormatted }, { $set: movieData })
    )
    .then((result) => {
      if (result.acknowledged) return findbyId(id);
      else return null;
    });
};

const deleteOne = (id) => {
  const movieIdFormatted = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("movieDetails").findOneAndDelete({ _id: movieIdFormatted })
  );
};

export const moviesDAO = {
  findAll,
  findbyId,
  addOne,
  editOne,
  deleteOne,
};

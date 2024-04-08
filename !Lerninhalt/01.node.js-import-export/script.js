// import person from "./data";
let name = "Beate";
console.log(name);

let nachname = "Patruschka";
console.log(nachname);

// # alte aber noch sehr häufige import schreibweise

// const person = require("./data");
// const { person1, person2 } = require("./data");

// console.log(person);

// # neuere import schreibweise

import { person1, person2 } from "./data.js";
console.log(person1);

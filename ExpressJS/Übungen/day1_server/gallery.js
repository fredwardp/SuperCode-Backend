import fs from "fs";

// const galleryGrid = document.getElementsByClassName(".gallery_grid");

let images = fs.readdirSync("public/img");

console.log(images);

// galleryGrid.innerHTML = images.map((img) => {
//   `<div> <img src="/public/img/${img}" alt=''></div>`;
// });

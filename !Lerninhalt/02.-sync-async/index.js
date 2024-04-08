import fs from "fs";

// const data = fs.readFileSync("./text.txt");
// console.log(data);

fs.readFile("./text.txt", (err, data) => {
  err ? console.log(err) : console.log(data.toString());
});

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui delectus voluptas maxime aliquid dolor nisi praesentium? Corporis, doloribus nam? Explicabo eius repellat officiis minima. Cupiditate minima quibusdam eius dolores eligendi, odio dolorem voluptatem fugiat cumque sapiente aliquam voluptates, nihil itaque accusamus nesciunt quam culpa sequi natus delectus voluptatum error, velit alias maiores. Animi, provident. Consequuntur voluptatem explicabo reiciendis necessitatibus amet iure, deserunt quod nihil velit blanditiis exercitationem. Perspiciatis, assumenda maiores quam est illo libero atque explicabo ab nisi voluptas consequatur amet optio sit! Ab beatae doloribus impedit sunt, laudantium commodi obcaecati. Hic neque non incidunt, corrupti aliquid velit asperiores.";

fs.writeFile("./textOutput.txt", text, (err) => {
  if (err) return console.log(err);

  console.log("done writing file");
});

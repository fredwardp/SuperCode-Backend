import fs, { existsSync } from "fs";

if (!existsSync("newFolder")) {
  fs.mkdir("newFolder", (err) => {
    if (err) console.log("no data", err);
  });
}

const newFunc = ((para) => {
  if (!existsSync("newFolder/text.txt")) {
    fs.appendFile("newFolder/text.txt", "", (err) => {
      if (err) console.log("no data", err);
    });
  } else {
    fs.appendFile("newFolder/text.txt", `${para} \n`, (err) => {
      if (err) console.log("no data", err);
    });
  }
})("hallo");

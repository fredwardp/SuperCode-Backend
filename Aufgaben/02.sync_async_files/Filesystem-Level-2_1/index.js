import fs from "fs";

let data = fs.readFileSync("datei.json", "utf-8");
// wandelt einen String in ein Array um
let realData = JSON.parse(data);

console.log(realData);

// wandelt ein array in einen String
// let dataString = JSON.stringify(realData, null, 2);

fs.unlink("new.txt", (err) => {
  if (err) console.log("no data");
});

realData.map((item) => {
  const output = `${item.id} - ${item.title} \n ${item.description} \n \n`;
  fs.appendFileSync("new.txt", output, (err) => {
    if (err) console.log("no data there", err);
  });
});

// das funktioniert nicht
// let testObj = {{{{key: "hallo"}}}}

// das funktioniert
// let testArray = [[[[[hallo]]]]];

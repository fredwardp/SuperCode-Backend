import fs from "fs";

// Text innerhalb einer Datei überschreiben

// fs.writeFile("blog1.txt", "Ich bin ein Webdeveloper", (err) => {
//   if (err) return console.log("no data", err);
// });

// Neue Datei anlegen

// fs.appendFile("blog2.txt", "Ich bin neu hier!", (err) => {
//   if (err) return console.log("no data", err);
// });

//Ordner löschen falls es ihn gibt und ansonsten neuen erstellen
// fs.rmdir("assets", (err) => {
//   if (err)
//     fs.mkdir("assets", (err) => {
//       if (err) console.log("no data", err);
//     });
// });

// Überprüfen ob eine Datei existiert und falls ja löschen
// fs.existsSync("delete.txt", (err) => {
//   if (err) {
//     console.log("no data", err);
//   } else {
//     fs.unlink("delete.txt", (err) => {
//       if (err) console.log("delete has not worked", err);
//     });
//   }
// });

// erstellen einer neuen Datei

fs.writeFile("delete.txt", "", (err) => {
  if (err) console.log("append file has failed");
});

//Datei erstellen und Text zuweisen

fs.appendFile("Hello.txt", "Hey, I'm the new Text in the yard", (err) => {
  if (err) console.log("append filde has failed", err);
});

// datei umbennen
fs.rename("Hello.txt", "HelloWorld.txt", (err) => {
  if (err) console.log("change name has failed", err);
});

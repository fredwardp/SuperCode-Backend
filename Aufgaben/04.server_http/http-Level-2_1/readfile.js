import fs from "fs";

const readFileFunc = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, dataBuffer) => {
      if (err) return reject(err);
      resolve(dataBuffer);
    });
  });
};

export default readFileFunc;

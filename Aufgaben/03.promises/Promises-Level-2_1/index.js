const randNumber = () => {
  return new Promise((resolve, reject) => {
    let number = Math.floor(Math.random() * 10 + 1);
    if (number < 6) {
      reject(console.log("number ist lower than 6"), resolve(number));
    }
    resolve(number);
  });
};

randNumber()
  .then((number) => console.log(number))
  .catch((err) => console.log("keine nummer erhalten", err));

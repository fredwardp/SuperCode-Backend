const promiseFunc = (number) => {
  return new Promise((resolve, reject) => {
    if (number !== Number(number)) {
      return reject(console.log("no number "));
    }
    setTimeout(() => {
      let doubleNumber = number * 2;
      resolve(doubleNumber);
    }, 2000);
  });
};

promiseFunc(2)
  .then((result) => console.log(result))
  .catch((err) => console.log("did not work", err));

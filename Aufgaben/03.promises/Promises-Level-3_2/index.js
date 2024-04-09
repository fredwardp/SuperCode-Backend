const numFunc = (number) => {
  return new Promise((res, rej) => {
    let randNumb = Math.floor(Math.random() * 1000 + 1);
    if (number !== Number(number)) {
      rej(console.log(number + " is not a number"));
    }
    setTimeout(() => {
      res(randNumb);
    }, number);
  });
};

Promise.all([numFunc(5000), numFunc(7000), numFunc(2000)])
  .then((res) => console.log(res))
  .catch((err) => console.log("no Data", err));

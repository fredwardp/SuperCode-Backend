const multiplier = (number) => {
  return new Promise((resolve, reject) => {
    if (!number) {
      reject(console.log("no number was given"));
    }
    let doubleNumber = number * number;
    resolve(doubleNumber);
  });
};

const newFunc = (numb) => {
  multiplier(numb)
    .then((doubleNumb) => multiplier(doubleNumb))
    .then((doubleNumb) => console.log(multiplier(doubleNumb)));
};

newFunc(5);

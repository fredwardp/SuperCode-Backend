const array = [6, 9, 12, 56, 9788, 23, 456, 937, 23, 21, 34, 67, 867, 96, 10];

// const evenFunc = (array) => {
//   const evenNumbers = array.map((number) => {
//     if (number % 2 == 0) {
//       return number;
//     } else {
//       return "";
//     }
//   });
// };
// console.log(evenNumbers);

let testArray = [...array];

// filter funktion selbst gebaut
let newArray = [];

const evenFunc = (array) => {
  array.map((number) => {
    if (number % 2 == 0) {
      newArray.push(number);
    }
    //   return newArray;
  });
  return newArray;
};
// console.log(evenFunc(testArray));

// reverse funktion selbst gebaut
let reverseArray = [];

const reverseFunc = (array) => {
  array.map((number) => {
    reverseArray.unshift(number);
  });
  return reverseArray;
};

// console.log(reverseFunc(testArray));

let secDoubArray = [];

const doubleFunc = (array) => {
  array.map((number, index) => {
    if (index % 2 !== 0) {
      secDoubArray.push(number * 2);
    } else {
      secDoubArray.push(number);
    }
  });
  return secDoubArray;
};

// console.log(doubleFunc(testArray));

let arrayVar = testArray.map((number, index) => {
  if (index % 2 == 0) {
    return number * 2;
  } else {
    return number;
  }
});

console.log(arrayVar);

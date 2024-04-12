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
    if (index % 2 == 0) {
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

// console.log(arrayVar);

// random number selber generieren ohne Math.random

const randomNumber = (numb) => {
  let timerNumb = "";
  for (let i = 1; i <= numb; i++) {
    const start = performance.now();
    doubleFunc(testArray);
    evenFunc(testArray);
    doubleFunc(testArray);
    evenFunc(testArray);
    doubleFunc(testArray);
    doubleFunc(testArray);
    doubleFunc(testArray);
    doubleFunc(testArray);
    evenFunc(testArray);
    doubleFunc(testArray);
    evenFunc(testArray);
    doubleFunc(testArray);
    doubleFunc(testArray);
    doubleFunc(testArray);
    doubleFunc(testArray);
    evenFunc(testArray);
    doubleFunc(testArray);
    const end = performance.now();
    let perfTime = end - start;
    let lastDigit = String(perfTime).slice(-1);
    timerNumb += lastDigit;
  }
  // let randNumber = Number(timerNumb);
  return timerNumb;
};

// setInterval(function () {
//   console.log(randomNumber(1));
// }, 1000);

// console.log(randomNumber(2));

const accuracyTest = {
  eins: [],
  zwei: [],
  drei: [],
  vier: [],
  fuenf: [],
  sechs: [],
  sieben: [],
  acht: [],
  neun: [],
  error: [],
};

for (let i = 1; i < 1000; i++) {
  let number = randomNumber(1);
  if (number == 1 || number == "1") {
    accuracyTest.eins.push(1);
  } else if (number == "2" || number == 2) {
    accuracyTest.zwei.push(1);
  } else if (number == "3" || number == 3) {
    accuracyTest.drei.push(1);
  } else if (number == "4" || number == 4) {
    accuracyTest.vier.push(1);
  } else if (number == "5" || number == 5) {
    accuracyTest.fuenf.push(1);
  } else if (number == "6" || number == 6) {
    accuracyTest.sechs.push(1);
  } else if (number == "7" || number == 7) {
    accuracyTest.sieben.push(1);
  } else if (number == "8" || number == 8) {
    accuracyTest.acht.push(1);
  } else if (number == "9" || number == 9) {
    accuracyTest.neun.push(1);
  } else {
    accuracyTest.error.push(1);
  }
}

// KI Ergebnis Test (Nicht bestanden)

// let previous = 0;
// function zufaelligeZahl() {
//   let date = new Date();
//   let zahl = (date.getMilliseconds() % 9) + 1;
//   if (zahl === previous) {
//     zahl = (zahl % 9) + 1;
//   }
//   previous = zahl;
//   return zahl;
// }

// for (let i = 1; i < 1000; i++) {
//   let number = zufaelligeZahl();
//   if (number == 1 || number == "1") {
//     accuracyTest.eins.push(1);
//   } else if (number == "2" || number == 2) {
//     accuracyTest.zwei.push(1);
//   } else if (number == "3" || number == 3) {
//     accuracyTest.drei.push(1);
//   } else if (number == "4" || number == 4) {
//     accuracyTest.vier.push(1);
//   } else if (number == "5" || number == 5) {
//     accuracyTest.fuenf.push(1);
//   } else if (number == "6" || number == 6) {
//     accuracyTest.sechs.push(1);
//   } else if (number == "7" || number == 7) {
//     accuracyTest.sieben.push(1);
//   } else if (number == "8" || number == 8) {
//     accuracyTest.acht.push(1);
//   } else if (number == "9" || number == 9) {
//     accuracyTest.neun.push(1);
//   } else {
//     accuracyTest.error.push(1);
//   }
// }

// console.log(accuracyTest);

let ergebnis = {
  eins: accuracyTest.eins.length / 10,
  zwei: accuracyTest.zwei.length / 10,
  drei: accuracyTest.drei.length / 10,
  vier: accuracyTest.vier.length / 10,
  fuenf: accuracyTest.fuenf.length / 10,
  sechs: accuracyTest.sechs.length / 10,
  sieben: accuracyTest.sieben.length / 10,
  acht: accuracyTest.acht.length / 10,
  neun: accuracyTest.neun.length / 10,
  error: accuracyTest.error,
};

// let ergebnis = {
//   eins: accuracyTest.eins,
//   zwei: accuracyTest.zwei,
//   drei: accuracyTest.drei,
//   vier: accuracyTest.vier,
//   fuenf: accuracyTest.fuenf,
//   sechs: accuracyTest.sechs,
//   sieben: accuracyTest.sieben,
//   acht: accuracyTest.acht,
//   neun: accuracyTest.neun,
//   error: accuracyTest.error,
// };

console.log(ergebnis);

let gesamtzahl =
  ergebnis.eins +
  ergebnis.zwei +
  ergebnis.drei +
  ergebnis.vier +
  ergebnis.fuenf +
  ergebnis.sechs +
  ergebnis.sieben +
  ergebnis.acht +
  ergebnis.neun;

// console.log(gesamtzahl);

// console.log(randomNumber(2));

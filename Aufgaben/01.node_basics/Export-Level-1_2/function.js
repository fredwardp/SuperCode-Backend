export const firstElement = (array) => console.log(array[0]);

export const allButLast = (array) => {
  array.pop();
  console.log(array);
};

export const lastElement = (array) => console.log(array.pop());

export const allButFirst = (array) => {
  array.shift();
  console.log(array);
};

export const removeElement = (array, number1, number2) => {
  array.splice(number1, number2);
  console.log(array);
};

export const allJustOnce = (array) => {
  return array.filter((value, index) => self.indexOf(value) === index);
};

export const arrayLength = (array) => console.log(array.length);

export const numberBtwn = (number1, number2) => {
  const sortFunc = (a, b) => {
    return a - b;
  };

  let newArray = [number1, number2];
  newArray.sort(sortFunc);
  let randNumber = Math.random() * (newArray[0] - newArray[1]) + newArray[1];

  console.log(Math.round(randNumber));
};

export const capitalLetter = (string) => {
  let firstLetter = string.charAt(0).toUpperCase();
  let newString = firstLetter + string.slice(1);
  return console.log(newString);
};

export const allUppercase = (string) => console.log(string.toUpperCase());

export const compLastLetter = (string1, string2) =>
  string1.slice(-1) === string2.slice(-1)
    ? console.log(true)
    : console.log(false);

// if (string1.slice(-1) === string2.slice(-1)) {
//     return true;
//   } else {
//     return false;
//   }

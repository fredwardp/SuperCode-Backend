export const bigCities = (array) => {
  let newArray = array.filter((city) => city.population >= 100000);
  return console.log(newArray);
};

export const smallCities = (array) => {
  let newArray = array.filter((city) => city.population < 100000);
  return console.log(newArray);
};

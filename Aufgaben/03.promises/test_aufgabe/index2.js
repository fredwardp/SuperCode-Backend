let previous = 0;
function zufaelligeZahl() {
  let date = new Date();
  console.log(date);
  let zahl = (date.getMilliseconds() % 9) + 1;
  console.log(zahl);
  if (zahl === previous) {
    zahl = (zahl % 9) + 1;
  }
  previous = zahl;
  return zahl;
}

// setInterval(function () {
//   console.log(zufaelligeZahl());
// }, 1000);

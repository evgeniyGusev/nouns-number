function getNoun(arr, num) {
  let rest = num % 10;
  if (rest === 1 && num !== 11) {
    return arr[0];
  } else if ((rest > 1 && rest <= 4) && ((num < 10 || num > 20) && num !== 0)) {
    return arr[1];
  } else {
    return arr[2];
  }
}
module.exports = getNoun;

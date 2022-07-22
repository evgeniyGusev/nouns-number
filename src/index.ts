export const getNoun = (arr: string[], num: number): string | boolean => {
  if (!arr.length) {
    console.error('getNoun ERROR: Param <array: string[]> must be an array of strings');
    return false;
  }

  if (arr.length !== 3) {
    console.error('getNoun ERROR: Param <array: string[]> must have a length of 3 elements');
    return false;
  }

  if (!num || typeof num !== 'number') {
    console.error('getNoun ERROR: Param <num: number> must be a Number');
    return false;
  }

  let rest: number = num % 10;
  if (rest === 1 && num !== 11) {
    return arr[0];
  } else if (rest > 1 && rest <= 4 && (num < 10 || num > 20) && num !== 0) {
    return arr[1];
  } else {
    return arr[2];
  }
};

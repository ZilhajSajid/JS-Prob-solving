// Write a function that returns the sum of all numbers in an array.

const sumOfNum = (arr) => {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(sumOfNum([1, 2, 3, 4]));

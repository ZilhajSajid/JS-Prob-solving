// Write a function that calculates the factorial of a number using a loop.
const factorialOfNum = (num) => {
  let result = 1;
  for (i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
};
console.log(factorialOfNum(5));

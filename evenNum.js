// Write a function that returns all even numbers from a given array.
const evenNum = (arr) => {
  let even = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  return even;
};
console.log(evenNum([1, 2, 3, 4, 5, 6]));

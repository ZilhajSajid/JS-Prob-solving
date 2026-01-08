// Write a function that takes a string and returns it reversed.

const reverseAStr = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseAStr("hello"));

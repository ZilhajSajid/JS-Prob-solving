// Write a function that checks if a string is a palindrome (reads the same forward and backward).

const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

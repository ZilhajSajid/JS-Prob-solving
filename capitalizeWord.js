// Write a function that capitalizes the first letter of each word in a string.

const capitalizedWord = (str) => {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};

console.log(capitalizedWord("hello world"));

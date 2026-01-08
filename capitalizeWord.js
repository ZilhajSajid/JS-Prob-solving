const capitalizedWord = (str) => {
  let words = str.split("");
  for (i = 0; i < str.length; i++) {
    words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join("");
};
console.log(capitalizedWord("hello world"));

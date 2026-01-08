// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

const countVowels = (str) => {
  let count = 0;
  const vowels = "aeiou";

  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("Programming"));

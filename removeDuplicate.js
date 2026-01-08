const removeDuplicate = (arr) => {
  let isDuplicate = [];
  for (i = 0; i < arr.length; i++) {
    if (!isDuplicate.includes(arr[i])) {
      isDuplicate.push(arr[i]);
    }
  }
  return isDuplicate;
};
console.log(removeDuplicate([1, 2, 2, 3, 4, 4]));

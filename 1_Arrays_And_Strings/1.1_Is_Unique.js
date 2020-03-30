function isUnique(inputStr) {
  const inputStrArr = inputStr.split("");
  const sortedInputStrArr = inputStrArr.sort();
  for (let i = 0; i + 1 < sortedInputStrArr.length; i++) {
    if (sortedInputStrArr[i] === sortedInputStrArr[i + 1]) {
      return false;
    }
  }

  return true;
}


console.log(isUnique("test"));
console.log(isUnique("tes"));
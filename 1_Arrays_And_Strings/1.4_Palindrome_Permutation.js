function isPalindromePermutation(input) {
  const lowerCasedInput = input.toLowerCase();

  const charHash = {};

  for (let i = 0; i < lowerCasedInput.length; i++) {
    if (charHash[lowerCasedInput[i]]) {
      charHash[lowerCasedInput[i]] += 1;
    } else {
      charHash[lowerCasedInput[i]] = 1;
    }
  }

  let oddCountCharacters = 0;
  Object.keys(charHash).forEach(key => {
    if (key !== " " && charHash[key] % 2 === 1) {
      oddCountCharacters++;
    }
  });

  if (oddCountCharacters > 1) {
    return false;
  }

  return true;
}


console.log(isPalindromePermutation("Tact Coa"));
console.log(isPalindromePermutation("ana ana"));
console.log(isPalindromePermutation("anbbaagbna"));
function isPermutation(word1, word2) {
  const word1Hash = {};
  const word2Hash = {};

  for (let i = 0; i < word1.length; i++) {
    if (word1Hash[word1[i]]) {
      word1Hash[word1[i]] += 1;
    } else {
      word1Hash[word1[i]] = 1;
    }
  }

  for (let i = 0; i < word2.length; i++) {
    if (word2Hash[word2[i]]) {
      word2Hash[word2[i]] += 1;
    } else {
      word2Hash[word2[i]] = 1;
    }
  }

  if (Object.keys(word2Hash).length !== Object.keys(word1Hash).length) {
    return false;
  }

  const word1HashKeys = Object.keys(word1);
  for (let i = 0; i < word1HashKeys.length; i++) {
    const word1Char = word1HashKeys[i];
    if (word1Hash[word1Char] !== word2Hash[word1Char]) {
      return false;
    }
  }

  return true;
}

console.log(isPermutation("tacocat", "tacoatc")); //true
console.log(isPermutation("test", "tset")); //true
console.log(isPermutation("testing", "testin")); //false
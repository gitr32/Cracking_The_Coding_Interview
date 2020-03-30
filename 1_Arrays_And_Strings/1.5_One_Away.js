function isOneAway(input, target) {
  const lengthDifference = Math.abs(input.length - target.length);
  if (lengthDifference > 1) {
    return false;
  }

  const inputCharMap = {};
  const targetCharMap = {};
  for (let i = 0; i < input.length; i++) {
    if (inputCharMap[input[i]]) {
      inputCharMap[input[i]] += 1;
    } else {
      inputCharMap[input[i]] = 1;
    }
  }

  for (let i = 0; i < target.length; i++) {
    if (targetCharMap[target[i]]) {
      targetCharMap[target[i]] += 1;
    } else {
      targetCharMap[target[i]] = 1;
    }
  }

  let charCountDiff = 0;
  Object.keys(inputCharMap).forEach(char => {
    if (!targetCharMap[char]) {
      charCountDiff += inputCharMap[char]
    } else {
      charCountDiff += Math.abs(inputCharMap[char] - targetCharMap[char])
    }
  });

  if (charCountDiff > 1) {
    return false;
  }

  return true;
}


console.log(isOneAway("pale", "ple")); //true
console.log(isOneAway("pales", "pale")); //true
console.log(isOneAway("pale", "bale")); //true
console.log(isOneAway("pale", "bake")); //false
console.log(isOneAway("ppale", "bbale")); //false
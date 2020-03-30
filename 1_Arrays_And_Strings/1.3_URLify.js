function urlify(input, trueLength) {
  const stored = [];
  for (let i = 0; i < input.length; i++) {
    if (i < trueLength) {
      if (input[i] === " ") {
        if (stored.length === 0) {
          input[i] = "%";
          stored.push("2");
          stored.push("0");
        } else {
          input[i] = stored.shift();
          stored.push("%");
          stored.push("2");
          stored.push("0");
        }

      } else if (stored.length > 0) {
        const current = input[i];
        stored.push(current);
        input[i] = stored.shift();
      }
    } else {
      if (stored.length > 0) {
        const current = input[i];
        stored.push(current);
        input[i] = stored.shift();
      }
    }
  }
  return input;
}

console.log(urlify(["M", "r", " ", "J", "o", "h", "n", " ", "S", "m", "i", "t", "h", " ", " ", " ", " "], 13));
console.log(urlify(["M", "r", " ", " ", "J", "o", " ", " ", " ", " "], 6));
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(string) {
  const noSpaces = string.split(" ").join("");
  const results = {};
  for (const letters of noSpaces) {
    if (!results[letters]) {
      results[letters] = 1;
    } else {
      results[letters] += 1;
    }
  }
  console.log(results)
  return results;
};
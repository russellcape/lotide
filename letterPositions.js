const letterPositions = function(string) {
  const results = {};
  const word = string.split(" ").join("").toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (results[word[i]]) {
      results[word[i]].push(i);
    }
    else {
      results[word[i]] = [i];
    }
  }
  // console.log(results)
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
    return false
  }
    return true
};

const assertArraysEqual = function(actual, expected) {
  console.log(Array.isArray(actual), Array.isArray(expected))
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

console.log(letterPositions("hello").e)

assertArraysEqual(letterPositions("hello").e, [1]);

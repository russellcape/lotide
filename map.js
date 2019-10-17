const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results
};

const results1 = map(words, word => word[0]);


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  } else {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
    return false
  }
  }
    return true
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertArraysEqual(eqArrays(["a", "b", "c"], [1, "b", "c"]), true)
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), undefined)
assertArraysEqual(eqArrays(["a1", "b2", "c3"], ["a1", "b2", "c3"]), false)

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
    return false
    }
  } 
  return true
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
}

const middle = function(array) {
  let arrayResult = [];
  if (array.length <= 2 && array.length > 0) {
    return arrayResult;
  } else if (array.length % 2 === 0) {
      return arrayResult = [array[(array.length / 2) - 1], array[array.length / 2]];
    } else {
      return arrayResult = array[(array.length - 1) / 2];
    }
};

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]),[]) // => []

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
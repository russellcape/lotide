const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};


const flatten = function(array) {
  let resultsArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        resultsArray.push(array[i][j]);
      }
    } else {
      resultsArray.push(array[i]);
    }
  }
  return resultsArray;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])) //[1, 2, 3, 4, 5, 6]
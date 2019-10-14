const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const tail = function(array) {
  console.log(array.slice());
};

const array = ["Yo Yo", "Lighthouse", "labs"];


tail(array);
assertEqual(array.length, 3);
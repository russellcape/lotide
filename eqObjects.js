const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]);
    return false;
  }
  return true;
};


const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1)
  let obj2 = Object.keys(object2)
  if (obj1.length !== obj2.length) {
    return false;
  } else {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        if (eqArrays(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else if (typeof obj1[key] === 'object') {
        if (eqObjects(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  } 
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
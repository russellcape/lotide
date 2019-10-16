const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};



const findKeyByValue = function(object, values) {
  let objectKeys = Object.keys(object);
  let index = 0;
  for (let argument in object) {
    if (object[argument] === values) {
      return objectKeys[index];
    }
    index++;
  }
  return undefined;
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bestTeamsbySport = {
  hockey: "Montreal Canadians",
  soccer: "Manchester United",
  baseball: "Boston Red Sox",
  football: "San Fransico 49ers",
  basketball: "New York Knicks"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


assertEqual(findKeyByValue(bestTeamsbySport, "Boston Red Sox"), "baseball");
assertEqual(findKeyByValue(bestTeamsbySport, "New York Rangers"), undefined);



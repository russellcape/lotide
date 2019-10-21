const middle = function(array) {
  let arrayResult = [];
  if (array.length <= 2 && array.length > 0) {
    return arrayResult;
  } 
  if (array.length % 2 === 0) {
      arrayResult = [array[(array.length / 2) - 1], array[array.length / 2]];
      return arrayResult
    } 
    arrayResult = [array[(array.length - 1) / 2]];
    return arrayResult
};


module.exports = middle;
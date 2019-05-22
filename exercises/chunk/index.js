// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // my solution:
  let newArray = [];
  let tempArray = [];

  for (el of array) {
    if (tempArray.length === size) {
      newArray.push(tempArray);
      tempArray = [];
      tempArray.push(el);
    } else {
      tempArray.push(el);
    }
  }

  if (tempArray.length > 0) {
    newArray.push(tempArray);
  }

  return newArray;
}

module.exports = chunk;

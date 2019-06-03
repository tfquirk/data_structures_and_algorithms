// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // solved for 2x2 only:
  const matrixArray = [];

  for (var i = 0; i < n; i++) {
    matrixArray[i] = new Array(n);
  }

  let counter = 1;
  // let [row, column] = [matrixArray.length, matrixArray.length]

  for (let row = 0; row < matrixArray.length; row++) {
    for (let column = 0; column < matrixArray.length; column++) {
      if (row === 0) {
        matrixArray[row][column] = counter;
        counter++;
      }
    }
  }

  for (let row = matrixArray.length - 1; row >= 0; row--) {
    for (let column = matrixArray.length - 1; column >= 0; column--) {
      if (row === matrixArray.length - 1) {
        matrixArray[row][column] = counter;
        counter++;
      }
    }
  }

  return matrixArray;
}

module.exports = matrix;

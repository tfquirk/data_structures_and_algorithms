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
  let result = new Array(n).fill().map(() => new Array(n).fill("#")); // create empty n x n array
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }

    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }

    startCol++;
  }

  return result;
}

module.exports = matrix;

// function matrix(n) {
// // solved for 2x2 only:
// const matrixArray = [];
//
// for (var i = 0; i < n; i++) {
//   matrixArray[i] = new Array(n);
// }
//
// let counter = 1;
//
// for (let row = 0; row < matrixArray.length; row++) {
//   for (let column = 0; column < matrixArray.length; column++) {
//     if (row === 0) {
//       matrixArray[row][column] = counter;
//       counter++;
//     }
//   }
// }
//
// for (let row = matrixArray.length - 1; row >= 0; row--) {
//   for (let column = matrixArray.length - 1; column >= 0; column--) {
//     if (row === matrixArray.length - 1) {
//       matrixArray[row][column] = counter;
//       counter++;
//     }
//   }
// }
//
// return matrixArray;
// }

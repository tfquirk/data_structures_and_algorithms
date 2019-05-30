// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  //suggested soltion 1:
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

module.exports = pyramid;

// // my solution:
// let spaces = n - 1;
// let bricks = 1;
//
// for (let i = 1; i <= n; i++) {
//   let level = " ".repeat(spaces) + "#".repeat(bricks) + " ".repeat(spaces);
//
//   if (i < n) {
//     console.log(level);
//     spaces -= 1;
//     bricks += 2;
//   } else {
//     console.log("#".repeat(bricks));
//   }
// }

// if (bricks === n) {
//   return console.log("#".repeat(bricks));
// }
//
// let level = " ".repeat(spaces) + "#".repeat(bricks) + " ".repeat(spaces);
// console.log(level);
//
// pyramid(n, spaces - 1, bricks + 2);

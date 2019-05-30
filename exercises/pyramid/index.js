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
  // my solution:
  let spaces = n - 1;
  let bricks = 1;

  for (let i = 1; i <= n; i++) {
    let level = " ".repeat(spaces) + "#".repeat(bricks) + " ".repeat(spaces);

    if (i < n) {
      console.log(level);
      spaces -= 1;
      bricks += 2;
    } else {
      console.log("#".repeat(bricks));
    }
  }
}

module.exports = pyramid;

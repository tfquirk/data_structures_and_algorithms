// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  // suggested solution 2 (recursive):
  // first include base case
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}

module.exports = steps;

// // my solution:
// const steps = [];
//
// for (let i = 1; i <= n; i++) {
//   if (i < n) {
//     let spaces = n - i;
//     steps.push("#".repeat(i) + " ".repeat(spaces));
//   } else {
//     steps.push("#".repeat(i));
//   }
// }
//
// for (let el of steps) {
//   console.log(el);
// }

// suggested solution 1:
// for (let row = 0; row < n; row++) {
//   let stair = "";
//   for (let column = 0; column < n; column++) {
//     if (column <= row) {
//       stair += "#";
//     } else {
//       stair += " ";
//     }
//   }
//   console.log(stair);
// }

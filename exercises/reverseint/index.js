// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // // my solution:
  // if (n < 0) {
  //   return -parseInt(
  //     String(n)
  //       .split("")
  //       .reverse()
  //       .join("")
  //   );
  // }
  //
  // return parseInt(
  //   String(n)
  //     .split("")
  //     .reverse()
  //     .join("")
  // );

  // solution 1:
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

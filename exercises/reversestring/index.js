// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // my solution:
  // let reversedString = "";
  //
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedString += str[i];
  // }
  //
  // return reversedString;

  // sample solution 1:
  // let splitString = str.split("");
  // return splitString.reverse().join("");

  // return str
  //   .split("")
  //   .reverse()
  //   .join("");

  // sample solution 2:
  // let reversed = "";
  //
  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  //
  // return reversed;

  // sample solution 3:
  // return str.split("").reduce((reversed, char) => {
  //   return char + reversed;
  // }, "");

  return str.split("").reduce((reversed, char) => char + reversed, "");
}

module.exports = reverse;

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverse(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

function palindrome(str) {
  // my solution 1:
  // // if (str === reverse(str)) {
  // //   return true;
  // // } else {
  // //   return false;
  // // }
  // my solution cleaner:
  // return str === reverse(str);

  // // suggested solution 1:
  // const reversed = str
  //   .split("")
  //   .reverse()
  //   .join("");
  //
  // return str === reversed;

  // alternate solution:
  return str.split("").every((char, idx) => char === str[str.length - 1 - idx]);
}

module.exports = palindrome;

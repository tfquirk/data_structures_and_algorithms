// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // my solution:
  let charHash = {};
  let mostCommonChar = "";
  let charCount = 0;

  for (char of str) {
    charHash[char] ? (charHash[char] += 1) : (charHash[char] = 1);
  }

  for (char in charHash) {
    if (charHash[char] > charCount) {
      mostCommonChar = char;
      charCount = charHash[char];
    }
  }

  return mostCommonChar;
}

module.exports = maxChar;

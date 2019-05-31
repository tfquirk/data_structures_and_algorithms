// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  const letters = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (letters.includes(char)) {
      count += 1;
    }
  }

  return count;
}

module.exports = vowels;

// // my solution:
// const vowels = ["a", "e", "i", "o", "u"];
// let vowelCount = 0;
//
// for (let char of str) {
//   if (vowels.includes(char.toLowerCase())) {
//     vowelCount += 1;
//   }
// }
//
// return vowelCount;

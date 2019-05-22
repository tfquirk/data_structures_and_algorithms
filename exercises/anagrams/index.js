// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // my solution:
  const stringA_cleaned = stringA.replace(/[^\w]/g, "").toLowerCase();
  const stringB_cleaned = stringB.replace(/[^\w]/g, "").toLowerCase();

  const stringA_hash = {};
  const stringB_hash = {};

  for (let char of stringA_cleaned) {
    stringA_hash[char] ? (stringA_hash[char] += 1) : (stringA_hash[char] = 1);
  }

  for (let char of stringB_cleaned) {
    stringB_hash[char] ? (stringB_hash[char] += 1) : (stringB_hash[char] = 1);
  }

  for (let key in stringA_hash) {
    if (stringA_hash[key] !== stringB_hash[key]) {
      return false;
    }
  }

  for (let key in stringB_hash) {
    if (stringA_hash[key] !== stringB_hash[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;

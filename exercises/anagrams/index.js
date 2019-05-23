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
  // // my solution:
  // const stringA_cleaned = stringA.replace(/[^\w]/g, "").toLowerCase();
  // const stringB_cleaned = stringB.replace(/[^\w]/g, "").toLowerCase();
  //
  // const stringA_hash = {};
  // const stringB_hash = {};
  //
  // for (let char of stringA_cleaned) {
  //   stringA_hash[char] ? (stringA_hash[char] += 1) : (stringA_hash[char] = 1);
  // }
  //
  // for (let char of stringB_cleaned) {
  //   stringB_hash[char] ? (stringB_hash[char] += 1) : (stringB_hash[char] = 1);
  // }
  //
  // for (let key in stringA_hash) {
  //   if (stringA_hash[key] !== stringB_hash[key]) {
  //     return false;
  //   }
  // }
  //
  // for (let key in stringB_hash) {
  //   if (stringA_hash[key] !== stringB_hash[key]) {
  //     return false;
  //   }
  // }
  //
  // return true;

  //   // suggested soltuion (added helper method):
  //   const aCharMap = createCharacterMap(stringA);
  //   const bCharMap = createCharacterMap(stringB);
  //
  //   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  //     return false;
  //   }
  //
  //   for (let key in aCharMap) {
  //     if (aCharMap[key] !== bCharMap[key]) {
  //       return false;
  //     }
  //   }
  //
  //   return true;
  // }
  //
  // function createCharacterMap(str) {
  //   const charMap = {};
  //
  //   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   }
  //
  //   return charMap;

  // suggested solution 2:
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

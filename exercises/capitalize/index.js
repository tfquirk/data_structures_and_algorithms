// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // // my solution:
  // const words = str.split(" ");
  // const capitalizedWords = [];
  //
  // words.forEach(word => {
  //   capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  // });
  //
  // return capitalizedWords.join(" ");

  // // suggested solution 1:
  // const words = [];
  //
  // for (let word of str.split(" ")) {
  //   words.push(word[0].toUpperCase() + word.slice(1));
  // }
  //
  // return words.join(" ");

  //suggested solution 2:
  let capitalized = "";

  for (var i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      capitalized = capitalized + str[i].toUpperCase();
    } else {
      capitalized = capitalized + str[i];
    }
  }

  return capitalized;
}

module.exports = capitalize;

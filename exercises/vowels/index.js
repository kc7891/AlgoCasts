// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 0.191s,
// 0.187s,
// function vowels(str) {
//   const strChars = str.split('')
//   return strChars.reduce(( summary, currentValue )=> {
//     return currentValue.match(/[aeiouAEIOU]/) ? ++summary : summary
//   }, 0)
// }

// 0.198s
// 0.162s
function vowels(str) {
  const replacedStr = str.replace(/[^aeiouAEIOU]/g,'')
  return replacedStr.length
}

module.exports = vowels;

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const removeNoneChars = function ( string ) {
  return string.replace(/[^A-Za-z0-9]/g,'')
}

const sortString = function ( string ) {
  return string.split('').sort().join('')
}

const anagrams = function (stringA, stringB) {
  stringA = removeNoneChars(stringA)
  stringB = removeNoneChars(stringB)

  if (stringA.length !== stringB.length) return false

  stringA = sortString( stringA.toLowerCase() )
  stringB = sortString( stringB.toLowerCase() )

  return stringA === stringB

}

module.exports = anagrams;

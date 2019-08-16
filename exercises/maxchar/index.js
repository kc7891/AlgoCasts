// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const summary = str.split('').reduce((accumulator,currentValue)=>{
    let charCount = accumulator[ currentValue ]
    charCount = charCount ? charCount + 1 : 1
    accumulator[ currentValue ] = charCount
    return accumulator
  },{})

  return Object.keys(summary).reduce( ( previousKey, key ) => {
    return summary[previousKey] > summary[key] ? previousKey : key
  } )

}

module.exports = maxChar;

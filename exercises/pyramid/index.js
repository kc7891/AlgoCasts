// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

  let airCount = n * 2
  for ( let i = 0; i < n; i++ ) {
    const replaceCountOfAirToBlock = 2
    const firstBlock = 1

    airCount -= replaceCountOfAirToBlock

    const halfOfAirCount = airCount ? airCount / 2 : 0
    const blockCount = firstBlock + replaceCountOfAirToBlock * i

    const result = ''.padStart( halfOfAirCount ,' ')
                      .padStart( halfOfAirCount + blockCount , '#' )
                      .padStart( airCount + blockCount ,' ')

    console.log( result )
    // console.log(result)
  }
}

module.exports = pyramid;

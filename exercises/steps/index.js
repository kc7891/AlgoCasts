// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// O(n^2)
// function steps(n) {
//   for ( let step = 1; step <= n; step++ ) {
//     let currentStep = ''
//     for ( let col = 1; col <= n; col++ ) {
//       currentStep += col <= step ? '#' : ' '
//     }
//     console.log( currentStep )
//   }
// }

// O(n)
function steps(n) {
  let maxStepSymbol = ''
  let maxEmptySymbol = ''
  for ( let col = 1; col <= n; col++ ) {
    maxStepSymbol += '#'
    maxEmptySymbol += ' '
  }

  for ( let step = 1; step <= n; step++ ) {
    console.log( maxStepSymbol.substr(0,step) + maxEmptySymbol.substr(step) )
  }

}

module.exports = steps;

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // create empty
    const result = []
    for ( let i = 0; i < n; i++ ) {
        result.push([])
    }

    // difine directions
    // direction is depends on the current number of straight
    // The key number is calculated from straightNumber%4
    const directions = {
        0: { target: 'y', distance: -1 },
        1: { target: 'x', distance: 1 },
        2: { target: 'y', distance: 1 },
        3: { target: 'x', distance: -1 },
    }

    // create status
    const position = { x: -1, y: 0 }
    let stepNeeded = n
    let count = 0

    // loop for corner count
    for ( let i = 1; i <= n * 2 - 1; i++ ) {

      // loop for step count on this straight
      // step count will be like this 1: n, 2: n-1, 3: n-1, 4:n-2, 5:n-2, 6:n-3 7:n-3
      for ( let straightStep = 0; straightStep < Math.floor(stepNeeded); straightStep++ ) {

        // get next direction
        const direction = directions[i%4]

        // set next direction to the position
        position[ direction.target ]
          = position[direction.target]
          + direction.distance

        // set value to current position
        result[position.y][position.x] = ++count
      }

      // update step count.
      // step decresing like -1,-1,-2,-2.
      // So we use 0.5 and Math.floor
      stepNeeded -= 0.5
    }

    return result

}

// function matrix(n) {

//     // create empty
//     const result = []
//     for ( let i = 0; i < n; i++ ) {
//         result.push([])
//     }

//     let positionX = -1
//     let positionY = 0
//     let previousDirection = 'right'
//     for ( let i = 1; i <= n * n; i++ ) {
//         const directions = {
//             right: { x: positionX + 1 , y: positionY},
//             down: { x: positionX , y: positionY + 1 },
//             left: { x: positionX - 1 , y: positionY },
//             up: { x: positionX , y: positionY -1 },
//         }
//         const right = { x: positionX + 1 , y: positionY}
//         const down  = { x: positionX , y: positionY + 1 }
//         const left  = { x: positionX - 1 , y: positionY }
//         const up    = { x: positionX , y: positionY -1 }

//         const sameAsPrevious = directions[previousDirection]
//         if ( sameAsPrevious.x < n 
//             && sameAsPrevious.x >= 0 
//             && sameAsPrevious.y < n 
//             && sameAsPrevious.y >= 0
//             && !result[sameAsPrevious.y][sameAsPrevious.x] ) {
//             direction = sameAsPrevious

//         } else if ( right.x < n && !result[right.y][right.x] ) {
//             direction = right
//             previousDirection = 'right'
//         } else if ( down.y < n && !result[down.y][down.x] ) {
//             direction = down
//             previousDirection = 'down'
//         } else if ( left.x >= 0 && !result[left.y][left.x] ) {
//             direction = left
//             previousDirection = 'left'
//         } else if ( up.y >= 0 && !result[up.y][up.x] ) {
//             direction = up
//             previousDirection = 'up'
//         }

//         positionX = direction.x
//         positionY = direction.y

//         console.log({i,positionX,positionY})

//         result[positionY][positionX] = i

//     }

//     console.log(result)

//     return result
// }

module.exports = matrix;

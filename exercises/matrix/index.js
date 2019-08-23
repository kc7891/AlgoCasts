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

    const directions = {
        0: { target: y, distance: -1 },
        1: { target: x, distance: 1 },
        2: { target: y, distance: 1 },
        3: { target: x, distance: -1 },
    }
    const position = { x: -1, y: 0 }
    const step = n
    const count = 1
    for ( let i = 1; i <= n; i++ ) {
        const direction = directions[i%4]
        const nextPosition = position[direction.target] + direction.distance
        position[ direction.target ] = nextPosition
    }
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

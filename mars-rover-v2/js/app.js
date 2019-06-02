// ===============================
// Iteration 1 | The Rover Object
// ===============================

let rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
}

// ===============================
// Iteration 2 | Turning the Rover
// ===============================

function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W'
      break
    case 'E':
      rover.direction = 'N'
      break
    case 'S':
      rover.direction = 'E'
      break
    case 'W':
      rover.direction = 'S'
      break
  };

  console.log(`Rover Direction changed to: ${rover.direction}`)
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E'
      break
    case 'E':
      rover.direction = 'S'
      break
    case 'S':
      rover.direction = 'W'
      break
    case 'W':
      rover.direction = 'N'
      break
  };

  console.log(`Rover Direction changed to: ${rover.direction}`)
}

// ===============================
// Iteration 3 | Moving the Rover
// ===============================

function moveForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y -= 1
      break
    case 'E':
      rover.x += 1
      break
    case 'S':
      rover.y += 1
      break
    case 'W':
      rover.x -= 1
      break
  };

  console.log(`Rover Direction changed to: [${rover.x}, ${rover.y}]`)

  let newMove = `${rover.x} , ${rover.y}`
  rover.travelLog.push(newMove)
  console.log(rover.travelLog)
}

// ===============================
// Iteration 4 | Commands
// ===============================

function commands(commandString) {
  for (let i = 0; i < commandString.length; i++) {
    let currentLetter = commandString[i]
    if (currentLetter === 'r') {
      turnRight()
      console.log('right')
    }
    if (currentLetter === 'l') {
      turnLeft()
      console.log('left')
    }
    if (currentLetter === 'f') {
      moveForward()
      console.log('move forward')
    }
  }
}
console.log(commands('rffrfflfrff'))

// ===============================
// Iteration 5 | Tracking
// ===============================
// We want to know where our rover has been. Create a property on the rover object that contains the coordinates of the places it has been.Call this property travelLog.

// After each move, push the coordinates of the previous space to the travelLog array.
// After the rover has finished its moves, print out all of the spaces the rover has traveled over.

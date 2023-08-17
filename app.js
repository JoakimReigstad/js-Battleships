const gamesBoardContainer = document.querySelector ('#gamesboard-container')
const optionContainer = document.querySelector('.option-container')
const flipButton = document.querySelector('#flip-button')
// Option Choosing
let angle = 0
function flip () {
const optionShips = Array.from(optionContainer.children)
angle = angle === 0 ? 90 : 0
optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`)

}

// Creating boards
const width = 10

function createBoard(color, user) {
    const gameBoardContainer = document.createElement('div')
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = color
    gameBoardContainer.id = user

    for (let i = 0; i < width*width; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = i
        gameBoardContainer.append(block)
    }

    gamesBoardContainer.appendChild(gameBoardContainer)
}

// Create and append boards
createBoard('yellow', 'player');
createBoard('purple', 'computer');
flipButton.addEventListener('click', flip)

// Creating ships

class Ship {
    constructor(name, length) {
        this.name = name
        this.length = length
    }
}

const destroyer = new Ship('destroyer', 2)
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('cruiser', 3)
const battleship = new Ship('battleship', 4)
const carrier = new Ship('carrier', 5)

const ships = [destroyer, submarine, cruiser, battleship, carrier]

function addShipPiece(ship) {
    const allBoardBlocks = document.querySelectorAll('#computer div')
    let randomBoolean = Math.random() < 0.5
    let isHorizontal = true
    let randomStartIndex = Math.floor(Math.random() * width * width)
    console.log(randomStartIndex)

    for(let i = 0; i < ship.length; i++){
        if (isHorizontal) {
            console.log (allBoardBlocks[Number(randomStartIndex) + i])
            } 
    }
}
addShipPiece(destroyer)
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

function createBoard(color) {
    const gameBoardContainer = document.createElement('div')
    gameBoardContainer.classList.add('game-board')
    gameBoardContainer.style.backgroundColor = 'purple'

    gameBoardContainer.append(gameBoardContainer)
}
createBoard('yellow')
createBoard('purple')
flipButton.addEventListener('click', flip)

const result = document.querySelector('.result')
const humnanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'DRAW!'
    } else if (human === 'rock' && machine === 'scissors' || human === 'paper' && machine === 'rock' || human === 'scissors' && machine === 'paper') {
        humanScoreNumber++
        humnanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'YOU WIN!'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'YOU LOST FOR ALEXA!'
    }
}

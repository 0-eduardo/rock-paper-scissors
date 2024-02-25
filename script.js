let gameRounds = 5;
let score = 0;

function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            switch (computerSelection) {
                case 'Rock':
                    return 0;
                case 'Paper':
                    return -1;
                case 'Scissors':
                    return 1;
            }
        case 'Paper':
            switch (computerSelection) {
                case 'Paper':
                    return 0;
                case 'Scissors':
                    return -1;
                case 'Rock':
                    return 1;
            }
        case 'Scissors':
            switch (computerSelection) {
                case 'Scissors':
                    return 0;
                case 'Rock':
                    return -1;
                case 'Paper':
                    return 1;
            }
    }
}

function playGame() {
    for (let i = 0; i < gameRounds; i++) {
        let playerMove = prompt('Your move: ', getComputerChoice());
        score += playRound(playerMove, getComputerChoice());
    }
    
    if (score > 0) {
        console.log('You won!');
    }
    else {
        console.log('You lost!')
    }
}
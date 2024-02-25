function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'Rock':
            switch (computerSelection) {
                case 'Rock':
                    return 'No one wins! It is a TIE.';
                case 'Paper':
                    return 'You lose! Paper beats Rock.';
                case 'Scissors':
                    return 'You win! Rock beats Scissors.'
            }
        case 'Paper':
            switch (computerSelection) {
                case 'Paper':
                    return 'No one wins! It is a TIE.';
                case 'Scissors':
                    return 'You lose! Scissors beats Paper.';
                case 'Rock':
                    return 'You win! Paper beats Rock.'
            }
        case 'Scissors':
        switch (computerSelection) {
            case 'Scissors':
                return 'No one wins! It is a TIE.';
            case 'Rock':
                return 'You lose! Rock beats Scissors.';
            case 'Paper':
                return 'You win! Scissors beats Paper.'
        }
    }
}

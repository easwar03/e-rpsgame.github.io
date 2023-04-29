const buttons = document.querySelectorAll('.btn');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = computerPlay();
        const result = playRound(playerChoice, computerChoice);
        updateScore(result);
        displayResult(result, playerChoice, computerChoice);
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'lose';
        } else if (computerChoice === 'scissors') {
            return 'win';
        } else {
            return 'draw';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'lose';
        } else if (computerChoice === 'rock') {
            return 'win';
        } else {
            return 'draw';
        }
    } else {
        if (computerChoice === 'rock') {
            return 'lose';
        } else if (computerChoice === 'paper') {
            return 'win';
        } else {
            return 'draw';
        }
    }
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function displayResult(result, playerChoice, computerChoice) {
    let message;
    if (result === 'win') {
        message = `You chose ${playerChoice}, computer chose ${computerChoice}. You win!`;
    } else if (result === 'lose') {
        message = `You chose ${playerChoice}, computer chose ${computerChoice}. You lose!`;
    } else {
        message = `You chose ${playerChoice}, computer chose ${computerChoice}. It's a draw!`;
    }
    document.getElementById('result').textContent = message;
}

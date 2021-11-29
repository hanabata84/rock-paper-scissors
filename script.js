const rockButton = document.querySelector('.rockBtn');
const paperButton = document.querySelector('.paperBtn');
const scissorsButton = document.querySelector('.scissorsBtn');

const compResult = document.querySelector('.compRes');
const playerResult = document.querySelector('.playerRes');
const roundResult = document.querySelector('.roundRes');
const playerScoreP = document.querySelector('.playerScore');
const computerScoreP = document.querySelector('.computerScore');
const gameResult = document.querySelector('.gameRes');

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', playRock);
paperButton.addEventListener('click', playPaper);
scissorsButton.addEventListener('click', playScissors);

function setText(playerScore, computerScore){
    if(playerScore === 5 || computerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        if(playerScore === 5) {
            gameResult.textContent = 'YOU WIN!'
        } else {
            gameResult.textContent = 'YOU LOSE!'
        }
    }
    playerScoreP.textContent = playerScore;
    computerScoreP.textContent = computerScore;
}

function playRock(){
    const computerSelection = computerPlay();
    if (computerSelection === 'Rock') {
        compResult.textContent = 'Rock';
        roundResult.textContent = 'Aiko';
    } else if (computerSelection === 'Paper') {
        compResult.textContent = 'Paper';
        roundResult.textContent = 'You lose! Paper > Rock';
        computerScore += 1;
    } else if (computerSelection === 'Scissors') {
        compResult.textContent = 'Scissors';
        roundResult.textContent = 'You win! Rock > Scissors';
        playerScore += 1;
    }
    setText(playerScore, computerScore);
}

function playPaper(){
    const computerSelection = computerPlay();
    if (computerSelection === 'Rock') {
        compResult.textContent = 'Rock';
        roundResult.textContent = 'You win! Paper > Rock';
        playerScore += 1;
    } else if (computerSelection === 'Paper') {
        compResult.textContent = 'Paper';
        roundResult.textContent = 'Aiko';
    } else if (computerSelection === 'Scissors') {
        compResult.textContent = 'Scissors';
        roundResult.textContent = 'You lose! Scissors > Paper';
        computerScore += 1;
    }
    setText(playerScore, computerScore);
}

function playScissors(){
    const computerSelection = computerPlay();
    if (computerSelection === 'Rock') {
        compResult.textContent = 'Rock';
        roundResult.textContent = 'You lose! Rock > Scissors';
        computerScore += 1;
    } else if (computerSelection === 'Paper') {
        compResult.textContent = 'Paper';
        roundResult.textContent = 'You win! Scissors > Paper';
        playerScore += 1;
    } else if (computerSelection === 'Scissors') {
        compResult.textContent = 'Scissors';
        roundResult.textContent = 'Aiko';
    }
    setText(playerScore, computerScore);
}

function game() {
    let gameCount = 5;
    for(let i = 1; i <= gameCount; i++){
        const playerSelection = prompt('rock, paper, scissors');
        const computerSelection = computerPlay();
        if (playerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'paper' || playerSelection.toLowerCase() === 'scissors'){
            console.log(playerSelection);
            console.log(computerSelection);
            console.log(playRound(playerSelection, computerSelection));
        } else {
            console.log('rock paper scissors only man! You lose the round!');
        }
    }
}

function computerPlay() {
    let randomPlay = Math.floor((Math.random() * 10));
    // random paper 0, 1, 2, 3, rock 4, 5, 6, scissors 7, 8, 9
    if (randomPlay >= 0 && randomPlay < 4) { 
        return 'Paper';
    } else if (randomPlay >= 4 && randomPlay < 7){
        return 'Rock';
    } else if (randomPlay >= 7 && randomPlay <= 9) {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return 'Aiko';
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return 'You lose! Paper > Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return 'You win! Rock > Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return 'You lose! Paper > Rock';
    } else if(playerSelection === 'paper' && computerSelection === 'Paper') {
        return 'Aiko';
    } else if(playerSelection === 'paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors > Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock > Scissors';
    } else if(playerSelection === 'scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors > Paper';
    } else if(playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return 'Aiko';
    }
}

// game();
const rockButton = document.querySelector('.rockBtn');
const paperButton = document.querySelector('.paperBtn');
const scissorsButton = document.querySelector('.scissorsBtn');

const compResult = document.querySelector('.compRes');
const playerResult = document.querySelector('.playerRes');
const roundResult = document.querySelector('.roundRes');
const playerScoreP = document.querySelector('.playerScore');
const computerScoreP = document.querySelector('.computerScore');
const gameResult = document.querySelector('.gameRes');

const newRoundButton = document.querySelector('.newRound');

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', playRock);
paperButton.addEventListener('click', playPaper);
scissorsButton.addEventListener('click', playScissors);
newRoundButton.addEventListener('click', refresh, false);

function refresh(){
    reload = location.reload();
}

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
        newRoundButton.removeAttribute('hidden');
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
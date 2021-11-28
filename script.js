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

game();
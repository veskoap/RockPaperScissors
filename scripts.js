function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';  
    }
}  


let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection = getComputerChoice(), computerSelection = getComputerChoice()) {

    if (playerSelection == computerSelection) {
        console.log('Tie!');
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('Computer Wins! Paper beats rock.' );
            computerScore++;
        } else {
            console.log('Player Wins! Rock beats scissors.');
            playerScore++;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log('Computer Wins! Scissors beats paper.');
            computerScore++;
        } else {
            console.log('Player Wins! Paper beats rock.');
            playerScore++;
        }
    } else { //playerSelection === 'scissors'
        if (computerSelection == 'rock') {
            console.log('Computer Wins! Rock beats scissors.' );
            computerScore++;
        } else {
            console.log('Player Wins! Scissors beats paper.');
            playerScore++;
        }
    }
}

function game() {
    let round = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
        round++
        console.log("Round: " + round + "| Player Score: " + playerScore + "  Computer Score: " + computerScore); 
     }
}
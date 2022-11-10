let playerScore = 0, computerScore = 0, round = 0;
let playerSelection = "";

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

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = prompt("rock/paper/scissors");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log('Tie!');
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('Computer Wins! Paper beats rock.' );
            computerScore++;
        } else { //computerSelection == scissors
            console.log('Player Wins! Rock beats scissors.');
            playerScore++;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log('Computer Wins! Scissors beats paper.');
            computerScore++;
        } else { //computerSelection == rock
            console.log('Player Wins! Paper beats rock.');
            playerScore++;
        }
    } else { //playerSelection == scissors
        if (computerSelection == 'rock') {
            console.log('Computer Wins! Rock beats scissors.' );
            computerScore++;
        } else { //computerSelection == paper
            console.log('Player Wins! Scissors beats paper.');
            playerScore++;
        }
    }
}

function getWinner() {
    if (playerScore == computerScore) {
        console.log("It is a tie!");
    } else if (playerScore > computerScore) {
        console.log("Player Wins Game!");
    } else {
        console.log("Computer Wins Game!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        round++
        console.log("Round: " + round + "| Player Score: " + playerScore + "  Computer Score: " + computerScore); 
     }
    getWinner();
}


let playerSelection;
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound (player, computer) {
    computerSelection = getComputerChoice();
    if ((player == "rock" && computerSelection == "scissors") ||
        (player == "paper" && computerSelection == "rock") ||
        (player == "scissors" && computerSelection == "paper")){
        playerScore ++;
        return ("You win! " + player + " beats " + computerSelection);
    } else if (player == computerSelection){
        return "It's a tie!";
    } else {
        computerScore ++;
        return ("You lose! " + computerSelection + " beats " + player);
    }
}

function game () {
    for (i = 0; i <= 4; i++){
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log("The score is: Player: " + playerScore + " Computer: " + computerScore);
        if (i == 4){
            if (playerScore == computerScore) {
                console.log("It's a tie!");
            } else if (playerScore > computerScore) {
                console.log("You won!");
            } else {
                console.log("You lose!");
            }
        }
    }
}

game();
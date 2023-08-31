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

function playRound (player) {
    computerSelection = getComputerChoice();
    if ((player == "rock" && computerSelection == "scissors") ||
        (player == "paper" && computerSelection == "rock") ||
        (player == "scissors" && computerSelection == "paper")){
        playerScore ++;
        if (playerScore == 5){
            return "You won! You got to 5 first.";
        } else{
            return ("You win! " + player + " beats " + computerSelection);
        };
    } else if (player == computerSelection){
        return "It's a tie!";
    } else {
        computerScore ++;
        if (computerScore == 5){
            return "You lose! The computer got to 5 first.";
        } else {
            return ("You lose! " + computerSelection + " beats " + player);
        };
    }
}

const buttons = document.querySelectorAll('.weapon');
const resultsList = document.querySelector('#resultcontainer');
const showScore = document.querySelector('#score');
const score = document.createElement('p');
score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
showScore.appendChild(score);
const result = document.createElement('p');
result.classList.add('result');
resultsList.appendChild(result);
const restart = document.querySelector('#resetbutton');
restart.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
});


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5) return;
        result.textContent = playRound(button.id);
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    });
});
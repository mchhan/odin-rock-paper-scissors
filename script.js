
//Get computer output//
function getComputerChoice() {
    //Computer randomly chooses between 3 values//
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    //The 3 values correspond to a different hand//
    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else if (randomNumber === 3) {
        computerChoice = "Scissors";
    }
    return computerChoice;
    }
    console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) { 
    //If player chooses rock//
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        roundResult = "Tie. Try again.";
        return roundResult;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        roundResult = "You lose. Paper beats Rock.";
        return roundResult;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        roundResult = "You win. Rock bests Scissors.";
        return roundResult;
    //If player chooses paper//
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        roundResult = "Tie. Try again.";
        return roundResult;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        roundResult = "You lose. Scissors beats Paper.";
        return roundResult;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        roundResult = "You win. Paper beats Rock.";
        return roundResult;
    //If player chooses scissors//
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        roundResult = "Tie.S Try again.";
        return roundResult;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        roundResult = "You lose. Rock beats Scissors.";
        return roundResult;
    } else (playerSelection === "Scissors" && computerSelection === "Paper")
        roundResult = "You win. Scissors beats Paper.";
        return roundResult;
    }

    //Get player input//
    let playerChoice = prompt("What hand do you want to play?");
    const playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);

    console.log(playerSelection); 

    const computerSelection = computerChoice;

    console.log(playRound(playerSelection, computerSelection));  
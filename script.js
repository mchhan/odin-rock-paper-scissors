function game() {
    for (let i = 0; i < 5; i++) {
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

        for (let r = 0; r < 5; r++) {
            function playRound(playerSelection, computerSelection) { 
                //If player chooses rock//
                if (playerSelection === "Rock" && computerSelection === "Rock") {
                    return "Tie. Try again."
                } else if (playerSelection === "Rock" && computerSelection === "Paper") {
                    return "You lose. Paper beats Rock.";
                } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
                    return "You win. Rock bests Scissors.";
                //If player chooses paper//
                } else if (playerSelection === "Paper" && computerSelection === "Paper") {
                    return "Tie. Try again.";
                } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
                    return "You lose. Scissors beats Paper.";
                } else if (playerSelection === "Paper" && computerSelection === "Rock") {
                    return "You win. Paper beats Rock.";
                //If player chooses scissors//
                } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
                    return "Tie. Try again.";
                } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
                    return "You lose. Rock beats Scissors.";
                } else (playerSelection === "Scissors" && computerSelection === "Paper")
                    return "You win. Scissors beats Paper.";
            }
        }

        //Get player input//
        let playerChoice = prompt("What hand do you want to play?");
        const playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);

        console.log(playerSelection); 


        const computerSelection = computerChoice;
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());
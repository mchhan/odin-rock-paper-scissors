//Get computer output//
function getComputerChoice() {
    //Computer randomly chooses between 3 values//
    let computerChoice = Math.random() * (3 - 1) + 1;
    let computerHand = Math.round(computerChoice);
    //The 3 values correspond to a different hand//
    if (computerHand === 1) {
        return "Computer plays Rock!";
    } else if (computerHand === 2) {
        return "Computer plays Paper!";
    } else {
        return "Computer plays Scissors!";
    }
}

console.log(getComputerChoice());

//Single round of Rock-Paper-Scissors and has two parameters- playerSelection and computerSelection//
function singleRound() {
    //playerSelection parameter gets user input for hand played//
    function playerSelection() {
        let playerSelection = prompt("What hand do you want to play?");
        let playerHand = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
        console.log(playerHand);
    }
    
}
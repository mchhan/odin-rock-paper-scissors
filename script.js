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
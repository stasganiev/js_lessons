'use strict';

function getComputerChoice() {
    let choiceValue = Math.random();
    if (choiceValue < 0.333) {
        return 'Rock';
    } else if (choiceValue >= 0.666) {
        return 'Paper';
    }
    return 'Scissors';
}

let computerChoice = getComputerChoice();

console.log(computerChoice);

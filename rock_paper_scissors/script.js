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

function getHumanChoice() {
    let choiceValue = +prompt('1 - Rock, 2 - Paper, 3 - Scissors');
    if (choiceValue === 1) {
        return 'Rock';
    } else if (choiceValue === 2) {
        return 'Paper';
    } else if (choiceValue === 3) {
        return 'Scissors';
    }
    return undefined;
}

let humanChoice = undefined;

while (humanChoice === undefined) {
    humanChoice = getHumanChoice();
}

let computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);4

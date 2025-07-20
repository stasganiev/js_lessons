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
    let choiceValue = +prompt('1 - Rock, 2 - Paper, 3 - Scissors, Any other = Exit');
    if (choiceValue === 1) {
        return 'Rock';
    } else if (choiceValue === 2) {
        return 'Paper';
    } else if (choiceValue === 3) {
        return 'Scissors';
    }
    return undefined;
}

function getRoundResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    }
    if (humanChoice === 'Rock' && computerChoice === 'Scissors'
        || humanChoice === 'Paper' && computerChoice === 'Rock'
        || humanChoice === 'Scissors' && computerChoice === 'Paper') {
        return 1;
    }
    return -1;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === undefined) {
        return undefined;
    }

    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);

    let resoltOfRound = getRoundResult(humanChoice, computerChoice);

    if (resoltOfRound === 0) {
        console.log('No win');
    } else if (resoltOfRound === 1) {
        console.log('You win');
    } else {
        console.log('Computer wins');
    }

    return resoltOfRound;

}

let humanScore = 0;
let computerScore = 0;

let roundResult = playRound(getHumanChoice(), getComputerChoice());

while (roundResult !== undefined) {
    if (roundResult === 1) {
        humanScore++;
    } else if (roundResult === -1) {
        computerScore++;
    }
    console.log(`Score ${humanScore}:${computerScore}`);
    roundResult = playRound(getHumanChoice(), getComputerChoice());
}

console.log('Game over');

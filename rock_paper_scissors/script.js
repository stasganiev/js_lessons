'use strict';

const THINGS = ['Rock','Paper','Scissors'];

let humanScore = 0;
let computerScore = 0;
// let leftRounds = 5;

const btnReset = document.querySelector('.btn-reset');
const btnRock = document.querySelector('.choice-btn-rock');
const btnPaper = document.querySelector('.choice-btn-paper');
const btnScissors = document.querySelector('.choice-btn-scissors');

const humanNoChoice = document.querySelector('.current-img-1-nochoice');
const humanRock = document.querySelector('.current-img-1-rock');
const humanPaper = document.querySelector('.current-img-1-paper');
const humanScissors = document.querySelector('.current-img-1-scissors');

const humanItems = [humanRock,humanPaper,humanScissors,humanNoChoice];
let humanCurrentItem = humanNoChoice;

const computerNoChoice = document.querySelector('.current-img-2-nochoice');
const computerRock = document.querySelector('.current-img-2-rock');
const computerPaper = document.querySelector('.current-img-2-paper');
const computerScissors = document.querySelector('.current-img-2-scissors');

const computerItems = [computerRock,computerPaper,computerScissors,computerNoChoice];
let computerCurrentItem = computerNoChoice;

const infoScore = document.querySelector('.info-score');

function getComputerChoice() {
    let choiceValue = Math.random();
    if (choiceValue < 0.333) {
        return 0;
    } else if (choiceValue >= 0.666) {
        return 1;
    }
    return 2;
}

function getHumanChoice(choiceValue) {
    //'1 - Rock, 2 - Paper, 3 - Scissors, Any other = Exit'
    if (choiceValue === 1) {
        return 0;
    } else if (choiceValue === 2) {
        return 1;
    } else if (choiceValue === 3) {
        return 2;
    }
    return undefined;
}

function getRoundResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    }
    if (humanChoice === 0 && computerChoice === 2
        || humanChoice === 1 && computerChoice === 0
        || humanChoice === 2 && computerChoice === 1) {
        return 1; // human win
    }
    return -1;
}

function toggeVisualize(item1, item2) {
    if (item1 === item2) return;
    item1.classList.toggle('visually-hidden');
    item2.classList.toggle('visually-hidden');
}

function updateHumanChoice(humanChoice) {
    let newItem = humanItems[humanChoice];
    toggeVisualize(humanCurrentItem, newItem);
    humanCurrentItem = newItem;
}

function updateComputerChoice(computerChoice) {
    let newItem = computerItems[computerChoice];
    toggeVisualize(computerCurrentItem, newItem);
    computerCurrentItem = newItem;
}

function updateWinStep(res) {
    if (res === 0) {
        humanCurrentItem.style.borderColor = '#ddd';
        computerCurrentItem.style.borderColor = '#ddd';
    } else if (res === 1) {
        humanCurrentItem.style.borderColor = '#2d2';
        computerCurrentItem.style.borderColor = '#d22';
    } else {
        humanCurrentItem.style.borderColor = '#d22';
        computerCurrentItem.style.borderColor = '#2d2';
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    let resoltOfRound = getRoundResult(humanChoice, computerChoice);

    if (resoltOfRound === 1) {
        humanScore++;
    } else if (resoltOfRound === -1) {
        computerScore++;
    }

    updateHumanChoice(humanChoice);
    updateComputerChoice(computerChoice);
    updateWinStep(resoltOfRound);

    if (humanScore === 5 || computerScore === 5) {
        infoScore.textContent = (humanScore === 5) ? 'Win!' : 'Lose';
        return;
    }

    infoScore.textContent = `${humanScore} : ${computerScore}`;

}

btnReset.addEventListener('click', function(evt) {
    evt.preventDefault();
    humanScore = 0;
    computerScore = 0;
    playRound(3,3);
});

btnRock.addEventListener('click', function(evt) {
    evt.preventDefault();
    playRound(0, getComputerChoice());
});

btnPaper.addEventListener('click', function(evt) {
    evt.preventDefault();
    playRound(1, getComputerChoice());
});

btnScissors.addEventListener('click', function(evt) {
    evt.preventDefault();
    playRound(2, getComputerChoice());
});

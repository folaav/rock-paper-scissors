
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.round((Math.random() * 2) + 1);
    if (choice === 1) {
        console.log('Computer chose Rock')
        return ('rock');
    }
    else if (choice === 2) {
        console.log('Computer chose Paper')
        return ('paper');
    }
    else {
        console.log('Computer chose Scissors')
        return ('scissors');
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, paper, or scissors?');
    humanChoice = humanChoice.toLowerCase();
    console.log(`You chose ${humanChoice}`);
    return humanChoice;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log('You tie! Try again.');
    }
    else if (computerChoice === 'rock' && humanChoice === 'paper') {
        console.log('You win! Paper beats rock.');
        humanScore++;
    }
    else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        console.log('You win! Scissors beats paper.');
        humanScore++;
    }
    else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        console.log('You win! Rock beats scissors.');
        humanScore++;
    }
      else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log('You lose! Rock beats scissors.');
        computerScore;
    }
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log('You lose! Paper beats rock.');
        computerScore;
    }
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log('You lose! Scissors beats paper.');
        computerScore;
    }
}
playRound(humanChoice, computerChoice);
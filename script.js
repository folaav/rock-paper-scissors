function getComputerChoice() {
    let choice = Math.floor((Math.random() * 2) + 1);
    if (choice === 1) {
        console.log('Computer chose Rock');
        return ('rock');
    }
    else if (choice === 2) {
        console.log('Computer chose Paper');
        return ('paper');
    }
    else {
        console.log('Computer chose Scissors');
        return ('scissors');
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, paper, or scissors?');
    humanChoice = humanChoice.toLowerCase();
    console.log(`You chose ${humanChoice}`);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
    
function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
        
        if (computerChoice === humanChoice) {
            console.log('You tie! Try again.');
        }
        else if (computerChoice === 'rock' && humanChoice === 'paper') {
            console.log('You win! Paper beats rock.');
            return humanScore++;
        }
        else if (computerChoice === 'paper' && humanChoice === 'scissors') {
            console.log('You win! Scissors beats paper.');
            return humanScore++;
        }
        else if (computerChoice === 'scissors' && humanChoice === 'rock') {
            console.log('You win! Rock beats scissors.');
            return humanScore++;
        }
        else if (computerChoice === 'rock' && humanChoice === 'scissors') {
            console.log('You lose! Rock beats scissors.');
            return computerScore++;
        }
        else if (computerChoice === 'paper' && humanChoice === 'rock') {
            console.log('You lose! Paper beats rock.');
            return computerScore++;
        }
        else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            console.log('You lose! Scissors beats paper.');
            return computerScore++;
        }
        return;
    }

    playRound(humanChoice, computerChoice);
}

playGame();
playGame();
playGame();
playGame();
playGame();


function overallScore() {
    console.log(`Your score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);

    if (humanScore > computerScore) {
        console.log('You have won this game. A win for the humans!');
    }
    else {
        console.log('The computer has won this game!')
    }
    return;
}

overallScore();
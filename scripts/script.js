let userScore = 0;

// randomizes
const options = [
  'rock',
  'paper',
  'scissors'
]

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * gamePlay.length);
  return options[randomIndex];
}

// function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper"
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "You lose! Rock beats scissors";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You lose! Paper beats rock"
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You lose! Scissors beats paper"
  } else {
    return "It's a tie."
  }
}

// Make the playerSelection parameter case-insensitive 
function playerSelection(choice) {
  return choice.toLowerCase();
}

// Call the function 
function userPrompt() {
  const userSelect = document.querySelectorAll("button");
  userSelect.forEach((button) => {
    button.addEventListener('click', event => {
      const userInput = event.target.textContent.toLowerCase();
      gamePlay(userInput);
    })
  })
}

// select elements
const output = document.createElement("p");
const message = document.querySelector(".message");
const score = document.createElement("p");
message.append(output, score);

// rounds 
function gamePlay(userChoice) {

  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    const result = playRound(playerSelection(userChoice), computerPlay());
    output.textContent = result;
    
    if (/win/.test(result)) {
      userScore++;
      score.textContent = userScore;
    }
  } 
}

userPrompt();

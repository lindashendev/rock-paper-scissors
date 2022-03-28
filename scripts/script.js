// begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

// randomizes
const gamePlay = [
  'rock',
  'paper',
  'scissors'
]
function computerPlay() {
  const randomIndex = Math.floor(Math.random() * gamePlay.length);
  return gamePlay[randomIndex];
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string 
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
console.log(playRound(playerSelection("rock"), computerPlay()));
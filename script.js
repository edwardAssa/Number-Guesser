let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = ()=>{
    // Generates a random number between 0 and 9
    return Math.floor(Math.random() * 10);
  }
  
  
  const compareGuesses = (humanGuess, computerGuess, secretTarget) =>{
    if (humanGuess < 0 || humanGuess >9){
      alert('Invalid number! Enter a number between 0 and 9.');
    }
  
    // finds the absolute value of the difference between humanGuess and secretTarget
    let humanG = Math.abs(secretTarget - humanGuess);
  
    // finds the absolute value of the difference between computerGuess and secretTarget
    let computerG = Math.abs(secretTarget - computerGuess);
  
    if (humanG < computerG){
      return true; //human wins
    }
    else if (humanG > computerG){
      return false; //computer wins
    }
    else {
      return true; // a tie results in a win for human
    }
  }
  
  const updateScore = (winner) =>{
    if (winner === 'human'){
      humanScore = humanScore + 1; 
    }
    else if (winner === 'computer'){
      computerScore = computerScore + 1;
    }
  }
  
  const advanceRound = () =>{
    currentRoundNumber = currentRoundNumber + 1;
  }
  
  updateScore('human');
  console.log(humanScore); // To confirm that this value increased by 1
  
  updateScore('computer');
  console.log(computerScore); // To confirm that this value increased by 1
  
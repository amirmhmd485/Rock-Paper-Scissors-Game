// code
let gameOptions = ["rock" , "paper" , "scissors"];

const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const p = document.createElement("p")
const choose = document.getElementById("choose");
choose.appendChild(p);

function getComputerChoice(){
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}
function check(e){
    let userChoice = e.target.id;
    let computerChoice = getComputerChoice();
    if(userChoice == computerChoice){
        p.textContent = "It's a tie!";
    }
    else if((userChoice == "rock" && computerChoice == "scissors") || (userChoice == "paper" && computerChoice == "rock") || (userChoice == "scissors" && computerChoice == "paper")){
        p.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        +(userScore_span.textContent)++;
    }
    else{
        p.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        +(computerScore_span.textContent)++;
    }
}
rockBtn.addEventListener("click" , check);
paperBtn.addEventListener("click" , check);
scissorsBtn.addEventListener("click" , check);

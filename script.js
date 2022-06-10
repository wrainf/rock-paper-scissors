let moves = ["Rock","Paper","Scissors"];
const buttons = document.querySelectorAll('button');
const outcomeBox = document.getElementById('round-outcome');
const computerScoreBox = document.getElementById('computerScore');
const playerScoreBox = document.getElementById('playerScore');


let playerScore = 0;
let computerScore = 0;
playerScoreBox.textContent = playerScore;
computerScoreBox.textContent = computerScore;

function computerPlay(){
    let index = Math.round(Math.random()*2);
    return moves[index];
}

function playRound(playerMove, computerMove){
    playerMove = playerMove.toLowerCase();
    computerMove = computerMove.toLowerCase();
    if(playerMove === "rock" && computerMove === "scissors" || 
    playerMove === "paper" && computerMove === "rock" ||
    playerMove === "scissors" && computerMove === "paper"){
        return 1;
    }
    else if(computerMove === playerMove){
        return 0;
    }else{
        return -1;
    }
}

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        let outcome = playRound(button.id,computerPlay());
        
        updateScore(outcome);
        showOutcome(outcome);
        checkWin();
        
    });
});



function showOutcome(outcome){
    // player wins
    if(outcome === 1){
        outcomeBox.textContent = "You Win!";
    }
    // computer wins
    else if(outcome === -1){
        outcomeBox.textContent = "You Lose!";
    }else{
        outcomeBox.textContent = "Draw..";
    }
}


function updateScore(outcome){
    // player wins
    if(outcome === 1){
        ++playerScore;
        playerScoreBox.textContent = playerScore;
    }
    // computer wins
    else if(outcome === -1){
        ++computerScore;
        computerScoreBox.textContent = computerScore;
    }
}

function checkWin(){
    if(playerScore == 5){
        alert("You WIN!");
        reset();
    }else if(computerScore == 5){
        alert("Computer WINS!");
        reset();
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    playerScoreBox.textContent = 0;
    computerScoreBox.textContent = 0;
    outcomeBox.textContent = '';
}


/*
function game(){
    let wins = 0,draws = 0, loses = 0;
    for (let index = 0; index < 5; index++) {
        let move = prompt("Select your move: ");
        while(!(moves.includes(move))){
            move = prompt("Select your move: ");
        }
        let result =playRound(move,computerPlay()); 
        console.log(result);
        if(result == "You WIN!"){
            wins++;
        }else if(result == "Draw!"){
            draws++;
        }else{
            loses++;
        }

    }
    if(wins >= loses){
        console.log("Player is Winner!")
    }else if(loses >= wins){
        console.log("Computer is Winner!")
    }else{
        console.log("Draw!")
    }
    
}
*/

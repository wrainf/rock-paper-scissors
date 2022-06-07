let moves = ["Rock","Paper","Scissors"]

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
        return "You WIN!";
    }
    else if(computerMove === "rock" && playerMove === "scissors" || 
    computerMove === "paper" && playerMove === "rock" ||
    computerMove === "scissors" && playerMove === "paper"){
        return `You Lose...${computerMove} beats ${playerMove} `;
    }else{
        return "Draw!";
    }
}

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


let userScore = 0;
let copmscore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const copmscorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}
const drawGame = (userChoice) =>{
    msg.innerText = "game draw!";
    msg.style.backgroundColor = "black";


}
const showWinnwe = (userWin) =>{
    if (userWin) {
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = "you win!";
        msg.style.backgroundColor = "Green";
        
    } else {
       copmscore++;
       copmscorePara.innerText = copmscore;
        msg.innerText = "you lose";
        msg.style.backgroundColor = "Red";


    }

}


const playGame = (userChoice) =>{
    console.log("user choice =" ,userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =" ,compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if( userChoice === "paper"){
            userWin = copmscore === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinnwe(userWin);
    }


};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
    const userChoice= choice.getAttribute("id");
    playGame(userChoice)
    });
});
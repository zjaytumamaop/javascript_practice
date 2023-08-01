//global variables
let pScore = 0; //player score
let cScore = 0; //computer score 


function getComputerChoice () {// return  randomly return either rock paper or scissor
    let num = Math.floor(Math.random() * 3 ) + 1;
        if (num == 1) {
            return "scissor";
        } else if (num == 2){
            return "rock";
        } else if (num == 3){
        return "paper";
        }

} 
function playSingleRound(playerSelection) {//take two paramters, then returns a string that declares the winner of the round
    let player = playerSelection.toLowerCase();
    let computer = getComputerChoice();

    if (player == computer){
        return "its a tie!"
    } 
    else if (player == "scissor") {

        //imbeded else if statement for player == scissor
        if (computer == "rock") {
            cScore++;
            return "Computer wins! " + computer + " beats " + player 
        } 
        else  {       
            pScore++;                                                   
            return "Player wins! " + player + " beats " + computer
        }

    } else if (player == "rock") {

        //imbeded else if statment foer player == rock
        if (computer == "scissor") {
            pScore++;
            return "Player wins! " + player + " beats " + computer
        } 
        else  {
            cScore++;
            return "Computer wins! " + computer + " beats " + player
        } 
    } else if (player == "paper") {
        
        //imbeded else if statement for player == paper
        if (computer == "rock") {
            pScore++;
            return "Player wins! " + player + " beats " + computer
        } 
        else {
            cScore++;
            return "Computer wins " + computer + " beats " + player
        }
    }
}
function firstFive(){
    if (pScore >= 5) {
        reset()
        swal("Congratulations! You've won!");
        
      } else if (cScore >= 5) {
        reset()
        swal("Oops! The computer has won.");
      }
}

function reset () {
    pScore = 0;
    cScore = 0;
    result = "Choose your weapon!"
}

// DOM
let result = "Choose your weapon!"; 
function output(input){
    result = input
    
}
    

function addPlayingClass(button) {
    button.classList.add('playing');
}

function removePlayingClass(button) {
    button.classList.remove('playing');
}

function triggerButton(button){
    addPlayingClass('button');
}

function buttonDelay(){

    setTimeout(3000)
}

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click',function() {output(playSingleRound('rock'))});
btnRock.addEventListener('click',function() {triggerButton(btnRock)});
btnRock.addEventListener('click',function() {buttonDelay()});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click',function() {output(playSingleRound('paper'))});
btnPaper.addEventListener('click',function() {triggerButton(btnPaper)});

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click',function() {output(playSingleRound('scissor'))});
btnScissors.addEventListener('click',function(){triggerButton(btnScissors);
})

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', function () {reset()} )



function updateInfo() {
    const playerScoreElement = document.getElementById("player");
    const computerScoreElement = document.getElementById("computer");
    const resultOutput = document.getElementById(("results"));
    
    resultOutput.innerHTML = result;
    playerScoreElement.innerHTML = pScore; // Assuming pScore is a variable that updates
    computerScoreElement.innerHTML = cScore; // Assuming cScore is a variable that updates
    
firstFive()
  }
  
  setInterval(updateInfo,1000);
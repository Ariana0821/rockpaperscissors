// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;




// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
});

$("#shoot").click(function(){
    randomNumber = ("rock","paper", "scissors");
    computerChoice = Math.random();
    
    console.log(computerChoice);
    
    if (computerChoice <= .33) {
        $("#computerChoice").text("rock");
     }
     
    else if (computerChoice > .33 && computerChoice < .66) {
    $("#computerChoice").text("paper");
} 
 else if (computerChoice >= .66 ){
    $("#computerChoice").text("scissors");
 }
console.log(userChoice)
console.log(computerChoice)

if (
    ((userChoice==="Rock")&&(computerChoice==="Rock"))||
    ((userChoice==="Paper")&&(computerChoice==="Paper"))||
    ((userChoice==="Scissors")&&(computerChoice==="Scissors"))||
    ){
        $("#message").text("Tie");
 }
 else if ((userChoice==="Rock")&&(computerChoice==="Paper"))||
    ((userChoice==="Paper")&&(computerChoice==="Scissor"))||
    ((userChoice==="Scissors")&&(computerChoice==="Rock"))||
    ){
        $("#message").text("Computer Wins");
}
else if ((userChoice==="Rock")&&(computerChoice==="Scissors"))||
    ((userChoice==="Paper")&&(computerChoice==="Rock"))||
    ((userChoice==="Scissors")&&(computerChoice==="Paper"))||
    ){
        $("#message").text("User Wins ");
    }
});
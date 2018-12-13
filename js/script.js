// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


//DOCUMENT READY FUNCTION BELOW

var userChoice ;

$("#shoot").click(function(){
    userChoice = $("#input").val();
     $("#userChoice").text(userChoice);
     
});

var computerChoice;

$("#shoot").click(function(){
    
     var randomAnswer;
     randomAnswer= Math.random();
     if (randomAnswer <.33){
        $("#computerChoice").text("Rock");
         computerChoice = "Rock";
     }
    else if(randomAnswer<.66){
        $("#computerChoice").text("Paper");
         computerChoice = "Paper";
    }
    else {
        $("#computerChoice").text("Scissor");
        computerChoice ="Scissor";
    }

console.log(userChoice)
console.log(computerChoice)

if (
    ((userChoice==="rock")&&(computerChoice==="Rock"))||
    ((userChoice==="paper")&&(computerChoice==="Paper"))||
    ((userChoice==="scissor")&&(computerChoice==="Scissor"))
    ){
    $("#message").text("Tie");
}
else if (((userChoice==="rock")&&(computerChoice==="Paper"))||
    ((userChoice==="paper")&&(computerChoice==="Scissor"))||
    ((userChoice==="scissor")&&(computerChoice==="Rock"))
    ){
    $("#message").text("Computer Wins");
}
else if(((userChoice==="rock")&&(computerChoice==="Scissor"))||
    ((userChoice==="paper")&&(computerChoice==="Rock"))||
    ((userChoice==="scissor")&&(computerChoice==="Paper"))
    ){
    $("#message").text("User Wins ");
}


});
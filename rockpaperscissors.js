var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2){
        console.log("The result is a tie!");
    }
    else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            console.log("Rock wins!");
        }
        else {
            console.log("Paper wins!");
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            console.log("Paper wins!");
        }
        else {
            console.log("Scissors wins!");
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "paper"){
            console.log("Scissors win!");
        }
        else {
            console.log("Rock wins!");
        }
    }
    else {
        console.log("Invalid entry, computer wins!");
    }
};

compare(userChoice, computerChoice)

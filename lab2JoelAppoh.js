// user's choice
let question = prompt("what is your choice?.. rock, paper or scissors?");
//let possiblechoices = ["rock","paper","scissors"];
//computer choice
let cchoice = ["rock", "paper","scissors"];
let computerChoice =  cchoice[Math.floor(Math.random() * cchoice.length)];
let message = "";
if (question == "rock" && computerChoice == "scissors")
{
    message = "You win";
}
else if ( question == "paper" && computerChoice == "rock")
{
    message = "You win";
}
else if  (question == "scissors" && computerChoice == "paper")
{
    message = "You win";
}
else
{
    message= "You Lose";
}

console.log("You chose"+ question + " and the computer chose " + computerChoice) ;
console.log("The result is : " + message);

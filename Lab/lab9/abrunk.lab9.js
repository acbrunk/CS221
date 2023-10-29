function RPS(){
    let userInput = prompt("Please enter Rock Paper or Scissors: ");
    let userIn = userInput.toLowerCase();
    
    
    let compIn = Math.floor(Math.random() * 3) + 1; //code found on https://www.w3schools.com/js/js_random.asp
    if(compIn == 1){
    compIn = "rock";
    }
    else if(compIn == 2){
        compIn = "paper";
    }
    else if( compIn == 3){
        compIn = "scissors";
    }
    let winner = "";
    if(userIn == compIn){
        winner = "It's a tie.";
    }
    else if((compIn == "rock" && userIn == "scissors") || (compIn == "paper" && userIn == "rock") || (compIn == "scissors" && userIn == "paper")){
        winner = "Computer Wins.";
    }
    else{
        winner = "User Wins."
    }
    
    console.log(`User: ${userIn}`);
    console.log(`Computer: ${compIn}`);
    console.log(`Winner: ${winner}`);


}
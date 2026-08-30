
const max = prompt("Enter the max number");

const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("You are right! congrats");
        break;
    }
    else if(guess<random){
        guess = prompt("Your number was too small. Please Try Again")
    }
    else{
        guess = prompt("Your guess was too large. Please Try Again");
    }
}
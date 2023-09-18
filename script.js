var secret = 0;
var guesses = 0;

secret = Math.floor(Math.random() * 100) + 1;
console.log("Secret Number: " + secret); // diagnostic print; for testing only

function onClick() {
    
    var guess = Number($("#guess").val());
    validate(guess);
}

function validate(guess) {

    var result = false;
    
    if(isNaN(guess) === true || guess === 0){
        alert("this input is not valid. Please enter a number between 1 - 100");
    }
    else{
        if(guess === secret){
            guesses++;
            $("#output").append("<p>Congratulations! You guessed correctly in only " + guesses + " guess(es)! Please refresh to play again!</p>");
        }
        else if(guess < secret){
            guesses++;
            $("#output").append("<p>" + guess + " is too low</p>");
        }
        else{
            guesses++;
            $("#output").append("<p>" + guess + " is too high</p>");
        }
    }
  
    return result;
}

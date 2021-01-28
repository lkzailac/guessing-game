/*
Guess Secret Number between num1 and num2
let secretNum = random num ??
-user makes guess
-if guess = secretNum, return "correct"
-if user input too high, return "Too High"
   and recall the question
-else return "Too Low"
    and recall the question
*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNum = 35;

function askGuess() {
    rl.question('Enter a guess:', answer => {
        let isCorrect = checkGuess(Number(answer))
        if (isCorrect) {
            console.log("You win!");
            rl.close();
        } else {
            askGuess();
        }

    });

}



let checkGuess = (num) => {
    if (num > secretNum) {
        console.log('too high')
        return false;
    } else if (num < secretNum) {
        console.log('too low');
        return false;
    } else {
        console.log('correct')
        return true;
    }
}

askGuess();

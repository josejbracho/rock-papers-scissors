const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let wins = 0;
let losses = 0;
let ties = 0;
let message = `Type 'r' for Rock
Type 'p' for Paper
Type 's' for Scissors
Type 'q' to Quit\n`;

console.log("Welcome to Rock/Paper/Scissors\n");
console.log(message);

function processCommand() {

    console.log(`${wins} - ${losses} - ${ties}`);

    rl.question('> ', (cmd) => {
        cmd = cmd.toLowerCase();

        // Calculate computer's move

        const randomNum = Math.floor(Math.random() * 3);

        let choiseStack = ['p', 'r', 's'];

        let resultMatrix = [
            ['t', 'c', 'u'],
            ['u', 't', 'c'],
            ['c', 'u', 't']
        ];

        let userChoiseIndex = choiseStack.indexOf(cmd);

        let userResult = resultMatrix[randomNum][userChoiseIndex];

        let picks = `You pick ${cmd}, computer picks ${choiseStack[randomNum]}.`

        if (cmd === 'h') {

            console.log("Help:\n");
            console.log(message);

        } else if (cmd === 'q') {
            rl.close();
            return;

        } else if (userResult === 't') {
                console.log(picks);
                console.log("You tie.\n");
                ties++;

        } else if (userResult === 'c') {
                console.log(picks);
                console.log("You lose...\n");
                losses++;
            }

        else if (userResult === 'u') {
                console.log(picks);
                console.log("You win!\n");
                wins++;
            }

        else {
            console.log("Invalid command.\n");
            console.log(message);
        }

        processCommand();
    });
}

processCommand();


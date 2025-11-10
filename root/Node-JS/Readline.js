const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [];

rl.question("How would you greet the world?", (answer) => {
  console.log(`The answer is: ${answer}`);
});

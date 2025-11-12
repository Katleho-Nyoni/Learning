const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What is your favorite programming language? ",
];

function collectAnswers(questions, done) {
  const answers = [];

  const questionAnswered = (answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  rl.question(questions[0], questionAnswered);
}

collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  console.log(answers);
  rl.close();
  process.exit();
});

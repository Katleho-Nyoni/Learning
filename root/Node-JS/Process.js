/**
 * Author: Katleho Nyoni
 * Topic: Using the process module
 *
 * Can read environment variables, exit the process, let us interact with the terminal and get information about the current process.
 * We can also collect info from the terminal like user input.
 */

console.log(process.argv); //outputs location of node & this file

console.log("Process ID:", process.pid); // It changes each time

/* Using the terminal
paste: node Process --name Katleho --greeting "Hello, World!"
*/

function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

let name = grab("--name");
let greeting = grab("--greeting");

console.log(`${greeting}, from ${name}!`);

process.stdout.write("Hello! "); // seems it wants to be imported first

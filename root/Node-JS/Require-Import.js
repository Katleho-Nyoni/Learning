/**
 * Author: Katleho Nyoni
 * Topic: Using the Require and Import Statements in Node.js
 *
 * The require statement was used in the past but is still supported. However, using the import statement is now the preferred way to include modules in Node.js.
 */

const path = require("path"); // Part of Node.js - Built-in
import path from "path"; // ES6 Module Syntax

// console.log(`Filename is: ${path.basename(__filename)}`);
console.log(`ES6 filename is: ${path.basename(__filename)}`); // This thing is trippin. The syntax is correct. It cant be saying '__filename' is not defined

let t = "Hello, World!";
for (let key in t) {
  console.log(t[key]);
}

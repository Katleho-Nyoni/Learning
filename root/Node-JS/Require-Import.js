/**
 * Author: Katleho Nyoni
 * Topic: Using the Require and Import Statements in Node.js
 *
 * The require statement was used in the past but is still supported. However, using the import statement is now the preferred way to include modules in Node.js.
 */

const path = require("path"); // Part of Node.js - Built-in
import Path from "path"; // ES6 Module Syntax

console.log(`Filename is: ${path.basename(__filename)}`);
console.log(`ES6 filename is: ${Path.basename(__filename)}`);

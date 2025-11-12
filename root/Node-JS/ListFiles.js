const fs = require("fs");

let files = fs.readdirSync("./");

console.log(files);

console.log("Asynchronous read:");

fs.readdir("./", (err, Files) => {
  if (err) {
    throw err;
  }
  console.log(Files);
});

// fs.readFile() is used to read the contents of a file asynchronously.

fs.readFile("Global.js", "UTF-8", (err, data) => {
  console.log(data);
});

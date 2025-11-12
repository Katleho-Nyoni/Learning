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

const fs = require("fs");

fs.mkdir("NewDirName", (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    console.log("Directory created successfully");
  }
});

fs.renameSync("./NewDirName/Sample.md", "./NewDirName/RenamedSample.md");

console.log("File renamed successfully.");

const fs = require("fs");

fs.rename("./NewDirName/RenamedSample.md", "./RenamedSample.md", (err) => {
  if (err) {
    throw err;
  }
  console.log("File moved successfully.");
});

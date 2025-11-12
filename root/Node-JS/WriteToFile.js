const fs = require("fs");

let md = `
# Node.js File System Module

======================================================================

This is a sample markdown file created using Node.js File System module.`;

fs.writeFile("Sample.md", md, (err) => {
  if (err) {
    throw err;
  }
  fs.appendFileSync(
    "Sample.md",
    "\n\n File created and this line is appended."
  );

  console.log("File created successfully.");
});

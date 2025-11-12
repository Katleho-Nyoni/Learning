const fs = require("fs");

let md = `
# Node.js File System Module

======================================================================

This is a sample markdown file created using Node.js File System module.`;

fs.writeFile("Sample.md", md, () => {
  console.log("File created successfully.");
});

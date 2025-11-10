// import path from "path";
const path = require("path");
// const util = require("util");
const v8 = require("v8");

const dirUploads = path.join(__dirname, "src", "files", "uploads");

console.log(dirUploads);
// util.log(path.basename(__filename));
console.log(path.basename(__filename));
// util.log(v8.getHeapStatistics());

console.log(v8.getHeapStatistics());

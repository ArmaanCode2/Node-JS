const fs = require("fs");

let text = fs.readFileSync("tut63.js","utf8")
text = text.replace("res","armaan");

console.log(text.toString());

// fs.writeFileSync("armaan.txt",text);
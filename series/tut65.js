// synchronous or bloking
// Asynchronous or non-bloking

const fs = require("fs");
fs.readFile("tut63.js","utf8",(err,data)=>{
    console.log(err,data);
});
console.log("finished");

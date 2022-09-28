const {createFile} = require('./utils');
const fs = require('fs');

createFile("hello.txt","hello");

console.log(fs.readdir.toString());
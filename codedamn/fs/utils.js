const fs = require('fs');

function createFile(name,content) {
    fs.writeFileSync(name,content);   
}

module.exports = {
    createFile
}
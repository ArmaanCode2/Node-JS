const path = require('path');

const a1 = path.basename('/foo/bar/baz/asdf/quux.html');
const a2 = path.dirname('/foo/bar/baz/asdf/quux.html');
const a3 = path.extname(__filename);
const a4 = path.isAbsolute(__filename);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
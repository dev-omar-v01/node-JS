/// documention https://nodejs.org/docs/latest-v21.x/api/path.html#windows-vs-posix

// const path = require('path');

// // directory name print
// console.log(__dirname);
// // current file path print
// console.log(__filename);

const path = require('path');
 const extentionName = path.extname("index.html");
 console.log(extentionName);
 const joinName = path.join(__dirname + "/views");
 console.log(joinName);
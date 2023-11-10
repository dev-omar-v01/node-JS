/// document os module  [https://nodejs.org/docs/latest-v21.x/api/os.html]


//import the os module 
const os = require("os");
//check the os module method
// console.log(os);
// user information computer
console.log(os.userInfo());
// homedirectory print path
console.log(os.homedir());
//host name printed
console.log(os.hostname());
//total memory
console.log(os.totalmem());
//free memory
console.log(os.freemem());
console.log(os.networkInterfaces());



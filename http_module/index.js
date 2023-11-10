//https://nodejs.org/docs/latest-v21.x/api/http.html
const http = require('http');
const port = 3000;
const hostName = "127.0.0.1";


//server create
 const  myServer =  http.createServer((req,res)=>{
    res.end("Hello, i am  first server");
});

//server hostname and port name set
myServer.listen(port,hostName,()=>{
    console.log(`Server is running successfully at https://${hostName}:${port}`);

});
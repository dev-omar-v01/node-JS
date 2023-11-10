///HTTP status code
//information response (100,199)
//successfully response (200,299)
//Redirects response (300,399)
//claint Errors response (400,499)
//server error response (500-599)

//https://nodejs.org/docs/latest-v21.x/api/http.html
const http = require('http');
const port = 3000;
const hostName = "127.0.0.1";


//server create
 const  myServer =  http.createServer((req,res)=>{
    res.writeHead(202,{'content-Type':'text/plain'});
    // res.end("Hello, i am  first server");
    res.write("hellow");
    res.end();

});

//server hostname and port name set
myServer.listen(port,hostName,()=>{
    console.log(`Server is running successfully at https://${hostName}:${port}`);

});
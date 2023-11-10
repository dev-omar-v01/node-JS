const http = require('http');
const fs = require('fs');
const port = 3000;
const hostName = "127.0.0.1";


//server create
 const  myServer =  http.createServer((req,res)=>{
   
    if(req.url == '/'){
        fs.readFile("index.html",(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();

        })
    }
    else if(req.url == '/contact'){
        fs.readFile("contract.html",(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();

        })
    }
   else if(req.url == '/about'){
        fs.readFile("about.html",(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();

        })
    }
    else{
        fs.readFile("error.html",(err,data)=>{
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write(data);
            res.end();

        })
    }


});

//server hostname and port name set
myServer.listen(port,hostName,()=>{
    console.log(`Server is running successfully at https://${hostName}:${port}`);

});
const http = require('http');
const fs = require('fs');
const port = 3000;
const hostName = "127.0.0.1";


//server create
 const  myServer =  http.createServer((req,res)=>{


    const handleReadFile=(statusCode,htmlFileLocation)=>{
        fs.readFile(htmlFileLocation,(err,data)=>{
            res.writeHead(statusCode,{'Content-Type':'text/html'});
            res.write(data);
            res.end();

        })


    }


   
    if(req.url == '/'){
        handleReadFile(200,"index.html");
       
    }
    else if(req.url == '/contact'){
        fs.readFile("contract.html",(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();

        })
    }
   else if(req.url == '/about'){
    handleReadFile(200,"about.html");
        // fs.readFile("about.html",(err,data)=>{
        //     res.writeHead(200,{'Content-Type':'text/html'});
        //     res.write(data);
        //     res.end();

        // })
    }
    else{
        handleReadFile(404,"error.html");
        // fs.readFile("error.html",(err,data)=>{
        //     res.writeHead(404,{'Content-Type':'text/html'});
        //     res.write(data);
        //     res.end();

        // })
    }


});

//server hostname and port name set
myServer.listen(port,hostName,()=>{
    console.log(`Server is running successfully at https://${hostName}:${port}`);

});
const express = require('express');
const app = express();
const PORT = 3000;


app.get("/",(req,res)=>{
    // const id = req.query.id;
    // const name = req.query.name;
    const {id,name} =req.query; 
    res.send(`Student id is : ${id}  student name ${name}`);
});


app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
});
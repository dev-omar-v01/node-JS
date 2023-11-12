require('dotenv').config();
const express = require('express');
const app  = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello I am a home Route");
})
app.listen(PORT,()=>{
    console.log(`Server is is Running at http://localhost:${PORT}`);
});
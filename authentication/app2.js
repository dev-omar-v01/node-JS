//md5 encryption use
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User =require("./models/user.model");
const md5 = require('md5');
const app = express();
const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGO_URL;

mongoose.connect(dbURL).then(()=>{
    console.log("mongoDB connection");
}).catch((error)=>{
    console.log("connection error");
});


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{

    res.send("home Route ");
});


app.post('/register',async (req,res)=>{
    const {email,password} = req.body;

    try{
      const newUser = new User({
        email:req.body.email,
        password:md5(req.body.password)
      });
       await  newUser.save();
      res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({
            error: error.message,
        });
    }

});


app.post('/login',async (req,res)=>{
    const email = req.body.email;
    const password = md5(req.body.password);
    try{
      const newUser = await User.findOne({email:email});
      if(newUser && newUser.password == password){
        res.status(200).json({message:"valid User"});

      }else{
        res.status(401).json({error:"user not valid"});
      }
    }catch(error){
        res.status(500).json({
            error: error.message,
        });
    }
});



app.use((err,req,res,next)=>{
   res.status(500).json({
    message: "something broke"
   })
});

app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`);
});
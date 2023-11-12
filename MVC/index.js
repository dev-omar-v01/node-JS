const express = require("express");
const userRouter = require('./routes/user.route');
const app  = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(userRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        "message":"rsource not found",
    });
});

app.listen(PORT,()=>{
    console.log(`Server is Running http://localhost:${PORT}`);
});
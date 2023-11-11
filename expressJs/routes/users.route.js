
const exress = require('express');
const router = exress.Router();

router.get("/register",(req,res)=>{
    res.send("i am a get request  at register route");
});

module.exports = router;
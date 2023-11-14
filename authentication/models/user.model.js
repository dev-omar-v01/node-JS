const mongoose = require("mongoose");
const encrypt =require('mongoose-encryption');


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require:true,
    },
    createdOn:{
        type:Date,
        default:Date.now
    }

});

//mongoose encryption key used
// const enckey = process.env.ENC_KEY;
// userSchema.plugin(encrypt,{secret:enckey,encryptedFields:['password']});



module.exports = mongoose.model("usersAuthDB",userSchema);
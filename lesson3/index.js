console.log("lesson3");
const fs = require('fs');
fs.writeFile('demo.txt','this is a sample text',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('success')
    }
});
console.log("lesson3");
const fs = require('fs');
///writeFile node js
// fs.writeFile('demo.txt','this is a sample text',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('success')
//     }
// });

///appendFile method use
// fs.appendFile('demo.txt',' i am a programer',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('success')
//     }
// });

// fs.readFile('demo.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// fs.rename('demo.txt','demo2.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("sucessfull");
//         }
//     });


//detefile 
// fs.unlink('demo.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log("sucessfull");
//         }
//     });



fs.exists('demo2.txt',(result)=>{
        if(result){
            console.log("fount");
        }else{
            console.log("not found");
        }
    });
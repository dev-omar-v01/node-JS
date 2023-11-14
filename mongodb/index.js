const express  = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = 3002;


app.use(express.json());
 app.use(express.urlencoded({extended:true}));



//create product schema
 const  productSchema   =new mongoose.Schema({
    title : {
     type: String,
     required: true
    },
    price : {
        type: Number,
        required: true
       },
    description : {
        type: String,
        required: true
       },
    createdAt:{
        type: Date,
        default: Date.now,
    }

});

//create product model
const Product = mongoose.model("Products",productSchema);



const dbConnectDB = async ()=>{
   try{
    await mongoose.connect('mongodb://127.0.0.1:27017/ProductDB');
    console.log("db is connected");
   }catch(error){
    console.log("db is not connected");    
    console.log(error);
    process.exit(1);
   }
}

app.listen(PORT, async()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    await dbConnectDB();
});

app.get("/",(req,res)=>{
    res.send(" I am home route");
});

app.post("/products", async (req,res)=>{
    try{
        const NewProduct = new Product({
            title: req.body.title,
            price:req.body.price,
            description:req.body.description
        });
        const productdata = await NewProduct.save();
        res.status(201).send(productdata);
            
    }catch(error){
        res.status(500).send({message: error});

    }
});

//get all procuts
app.get("/products", async(req,res)=>{
  try{
   const productdata = await Product.find();
   if(productdata){
    res.status(200).send(productdata);
   }else{
    res.status(400).send({message: "Product Not Found"});
   }
  
  }catch(error){
    res.status(500).send({message: error});
  }
});


//get spacific product

app.get("/products/:id", async (req,res)=>{
    try{
        const id = req.params.id;
        const productdata = await Product.find({ _id: id});
        // .select({title:1,_id:0});
        res.status(200).send(productdata);
            
    }catch(error){
        res.status(500).send({message: error});

    }
});
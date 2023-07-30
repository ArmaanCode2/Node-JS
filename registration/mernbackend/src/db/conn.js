const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/register",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
}).then(() =>{
    console.log("connection success");
}).catch((e) =>{
    console.log("error: " + e); 
})
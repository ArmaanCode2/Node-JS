const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/armaanKart',{useNewUrlParser: true,useUniFiedTopology:true});

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    //connected
    console.log("connected to db");
});